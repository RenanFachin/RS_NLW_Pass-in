provider "aws" {
  region = "us-east-2"
}

resource "aws_s3_bucket" "static_site" {
  bucket = "pass-in-app-devops-2"
  force_destroy = true

  tags = {
    Name        = "pass-in-app-devops-2"
    Environment = "DevOps"
  }
}

resource "aws_s3_bucket_public_access_block" "static_site" {
  bucket = aws_s3_bucket.static_site.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_website_configuration" "static_site" {
  bucket = aws_s3_bucket.static_site.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

resource "aws_s3_bucket_policy" "public_read_access" {
  bucket = aws_s3_bucket.static_site.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid       = "PublicReadGetObject",
        Effect    = "Allow",
        Principal = "*",
        Action    = "s3:GetObject",
        Resource  = "${aws_s3_bucket.static_site.arn}/*"
      }
    ]
  })
}

resource "aws_iam_user" "deploy_user" {
  name = "renan-deploy-user"
  tags = {
    Purpose = "S3 Deployment"
  }
}

resource "aws_iam_policy" "s3_deploy_policy" {
  name        = "S3FullDeployPolicy-v3"
  description = "Permissões de deploy para o bucket S3"

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Action = [
          "s3:ListBucket"
        ],
        Resource = "${aws_s3_bucket.static_site.arn}"
      },
      {
        Effect = "Allow",
        Action = [
          "s3:GetObject",
          "s3:PutObject",
          "s3:DeleteObject"
        ],
        Resource = "${aws_s3_bucket.static_site.arn}/*"
      }
    ]
  })
}

resource "aws_iam_user_policy_attachment" "attach_policy" {
  user       = aws_iam_user.deploy_user.name
  policy_arn = aws_iam_policy.s3_deploy_policy.arn
}

resource "aws_iam_access_key" "deploy_key" {
  user = aws_iam_user.deploy_user.name
}

output "access_key_id" {
  value     = aws_iam_access_key.deploy_key.id
  sensitive = true
}

output "secret_access_key" {
  value     = aws_iam_access_key.deploy_key.secret
  sensitive = true
}