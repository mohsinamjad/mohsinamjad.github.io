__NUXT_JSONP__("/blogs/b5881bfc-42d3-4cc7-aa75-b69dc52d8160", (function(a,b,c,d){return {data:[{post:{id:"b5881bfc-42d3-4cc7-aa75-b69dc52d8160",slug:"Dokku With Terraform & EC2",markdown:"\n# Deploy Docker Application On AWS EC2 Using Dokku & Terraform\n---\n\n\n&nbsp;\n### Prerequisites\n* Terraform installed for deploying instance on AWS EC2.\n* AWS account with proper credentials\n&nbsp;\n\n\n\nWe can deploy application in many ways, It totally depends on your need, for large scale production grade application it's better to use kubernetes which gives you horizontal scaling along with vertical scaling but it requires alot of resources which increase your cloud cost, but if you have multiple small scale apps and just one VPS then dokku is the way to go so let's jump into it.\n\n### Why Dokku? here are some benefits of using it.\n\n1.  Allow deployment of apps faster and easier just like Heroku.\n    \n2.  Allows installation of plugins such as Postgres\u002FMongoDB\u002FRedis and more.\n    \n3.  Allocate certificate with Let's encrypt for free using their plugin.\n    \n4.  Your apps aren't shutdown and managed by dokku.\n\n  ---\n  &nbsp; &nbsp;\n### Let's start\n#### Clone terraform repo\n&nbsp;\n```bash\ngh repo clone mohsinamjad\u002Fterraform-ec2-dokku\n```\nfollow repo readme and update files with your cloud information.\nwe will not go into details of each line of these terraform files but just a general overview of what's going on in each file.\n\n* Create S3 bucket where you will store your terraform cloud state. This step is **optional**, you can save it on your local as well but it's not recommended.\n```yaml\n# backend.tf\nterraform {\nbackend \"s3\" {\n\tbucket  =  \"mohsinsite\"\n\tkey  =  \"infra-terra\"\n\tregion  =  \"us-east-1\"\n }\n}\n```\n\n* This file includes all your EC2 (VPS) configuration, here user_data points to script which will run by aws once the server is up. for better understanding it's just like an entrypoint, in this script we are installing dokku on our server.\n```yaml\n# ec2.tf\nresource \"aws_instance\"  \"dokku\" {\n\t\tami  =  var.ami\n\t\tinstance_type  =  var.instance_type\n\t\tsubnet_id  =  var.subnet_id\n\t\tkey_name  = aws_key_pair.root_key_pair.key_nam\n\t\tvpc_security_group_ids  = [aws_security_group.dokku.id]\n\t\tuser_data  =  file(\"install-dokku.sh\")\n\t\ttags  = {\n\t\t  Name  =  \"Dokku server\"\n\t    }\n}\n```\n\n* keypair file includes your ssh key-pair public key so that you can ssh into your server with private key\n\n* security_groups file configure security group for ec2 which enables all inward\u002Foutward traffic on HTTP\u002FHTTPS and also enable port 443 for ssh.\n----\nOnce everything is updated apply terraform changes \n```bash\n# DRY RUN\nterraform plan\n\n# APPLY CHANGES\nterraform apply\n```\n---\n\nssh into server with pubic ip, replace ip and key accordingly.\n```bash\nssh -i ~\u002F.ssh\u002Fkey.pem  ubuntu@ip  \n```\nlet's run few commands so that we can run docker without sudo\n```bash\nsudo groupadd docker\nsudo usermod -aG docker $USER\nsudo gpasswd -a $USER docker\nnewgrp docker\nsudo service docker restart\n```\n&nbsp;\nGo to your public IP and configure domain or you can just paste your IP in hostname, the domain can be configured lately \n&nbsp;\n![](https:\u002F\u002Fmohsinsite.s3.amazonaws.com\u002Fb5184f9f-74b6-4f09-9cc5-7c4b8dc8dc9c.png)\n\n---\n&nbsp; &nbsp;\n### Deploy Application \nWe will deploy directus CMS on our server \n```bash\n# Create directus application\ndokku apps:create directus\n\n# Install postgres plugin\nsudo dokku plugin:install https:\u002F\u002Fgithub.com\u002Fdokku\u002Fdokku-postgres.git postgres\n\n# Run postgres container\nsudo dokku postgres:create directus-database --password PASSWORD --root-password ROOTPASSWORD\n\n# link postgres db with app\ndokku postgres:link directus-database directus\n\n# set env for app\ndokku config:set --no-restart directus \\\nKEY='255d861b-5ea1-5996-9aa3-922530ec40b1' \\\nSECRET='6116487b-cda1-52c2-b5b5-c8022c45e263' \\\nDB_CLIENT='pg' \\\nDB_HOST='dokku-postgres-directus-database' \\\nDB_PORT='5432' \\\nDB_DATABASE='directus_database' \\\nDB_USER='postgres' \\\nDB_PASSWORD='PASSWORD' \\\nCACHE_ENABLED='false' \\\nADMIN_EMAIL='admin@directus.com' \\\nADMIN_PASSWORD='directus' \\\n\n\n# deploy directus app\nsudo docker pull directus\u002Fdirectus:v9.0.0-rc.42\n# docker tag image:tag dokku\u002Fappname:tag\nsudo docker tag directus\u002Fdirectus:v9.0.0-rc.42 dokku\u002Fdirectus:latest\n# dokku tags:deploy appname tag\ndokku tags:deploy directus latest\n# port mapping as http:host:container\ndokku proxy:ports-add directus http:80:8055\n```\n&nbsp;\n### Now you can access your application on public URL\n\n&nbsp;\n![](http:\u002F\u002F52.90.97.175\u002Fassets\u002F472bc476-8c42-4170-b176-a214f44d61a6)",content:c,date_created:"2021-04-25T08:25:18Z",date_updated:"2021-04-30T13:08:05Z",logo:{id:"5be0790d-f365-44c7-a95d-19e9079d7407",filename_disk:"5be0790d-f365-44c7-a95d-19e9079d7407.png",__typename:d},author:{first_name:"Mohsin",last_name:"Amjad",description:c,title:"Full Stack Software Engineer",status:"active",email:"mohsinamjad51@gmail.com",avatar:{id:"6ecb4601-e36c-4393-9d95-99105b4311de",filename_disk:"6ecb4601-e36c-4393-9d95-99105b4311de.jpeg",__typename:d},__typename:"directus_users"},status:"published",categories:[{id:6,category_id:{id:"209c12e0-cde8-40a5-b4e8-7d1b55fab4d4",name:"Terrafrom",__typename:a},__typename:b},{id:7,category_id:{id:"3745aa62-cf69-489b-8ca5-cab080f19085",name:"Infrastructure",__typename:a},__typename:b},{id:8,category_id:{id:"560fa230-6630-4212-9fdc-c9c70cd71575",name:"EC2",__typename:a},__typename:b},{id:9,category_id:{id:"7ddcc488-ec18-4074-ba9e-88c6ca0530d5",name:"AWS",__typename:a},__typename:b},{id:10,category_id:{id:"e6490bb7-cb82-4ae1-b235-db95477fd174",name:"Docker",__typename:a},__typename:b}],__typename:"blog"}}],fetch:{},mutations:[]}}("category","category_blog_2",null,"directus_files")));