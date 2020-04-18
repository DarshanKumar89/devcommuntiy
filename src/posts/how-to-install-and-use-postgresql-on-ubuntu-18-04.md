---
title: How To Install and Use PostgreSQL on Ubuntu 18.04
date: "2020-04-18"
path: "/how-to-install-and-use-postgresql-on-ubuntu-18-04"
author: "Darshan Kumar"
excerpt: "Postgres, is a relational database management system that provides an implementation of the SQL querying language."
coverImage: "../images/PostGRESQL_newlogo.png"
---


###Prerequisites
Before continuing with this tutorial, make sure you are logged in as a user with sudo privileges.

###Install PostgreSQL on Ubuntu

At the time of writing this article, the latest version of PostgreSQL available from the official Ubuntu repositories is PostgreSQL version 10.4.

###To install PostgreSQL on your Ubuntu server follow the steps below:
##Step 1:

>sudo apt update

>sudo apt install postgresql postgresql-contrib


##Step 2 — Using PostgreSQL Roles and Databases:

>sudo -i -u postgres

>psql

>sudo -u postgres psql

##Step 3 — exit from postgres promt:
>\q

##Step 4 — Create a new PostgreSQL Role:
>sudo su - postgres -c "createuser darshan"

##Step 5 — Create a new PostgreSQL Database:
>sudo su - postgres -c "createdb darshanDB"

##Step 5 — Now login back to postgres prmot and Grant privileges:
>sudo -u postgres psql
>grant all privileges on database darshanDB to darshan;

##Step 6 — If you want to set a password:
>ALTER USER user_name WITH PASSWORD 'new_password';
>example : ALTER USER darshan WITH PASSWORD 'new_password';

##Step 7 — Enable remote access to PostgreSQL server:
>sudo vim /etc/postgresql/10/main/postgresql.conf
 ```changes in /etc/postgresql/10/main/postgresql.conf
#------------------------------------------------------------------------------
# CONNECTIONS AND AUTHENTICATION
#------------------------------------------------------------------------------

# - Connection Settings -

listen_addresses = '*'     # what IP address(es) to listen on;
 ```

 ##Step 8 — Now restart the postgres:
 >sudo service postgresql restart

 ###Step 9 - Verify the changes with the ss utility:
 >ss -nlt | grep 5432
```
LISTEN   0         128                 0.0.0.0:5432             0.0.0.0:*
LISTEN   0         128                    [::]:5432                [::]:*
```
----------------------------------------------------------------
-----------------------------------------------------------------
<div align="center">
#All SET TO WORK!!!
<div>

-----------------------------------------------------------------
-----------------------------------------------------------------

###Tools for postgres mac client
- [**Postico**](https://eggerapps.at/postico/)
- [**PostgresApp](https://postgresapp.com/)

##Refrence and inspirations
- https://linuxize.com/post/how-to-install-postgresql-on-ubuntu-18-04/
- https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04
- https://stackoverflow.com/questions/12720967/how-to-change-postgresql-user-password

