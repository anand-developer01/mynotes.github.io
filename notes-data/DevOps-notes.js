const isHighlighted = 'java-practice'
const Links1 = 'java-notes'
const Links2 = 'spring-boot-notes'
const Links3 = 'java-practice'
const Links4 = 'vue3-projects'

const DevOpsData = {
    DevOpsNotes: [
        {
            id: 1,
            section: "Git & Version Control",
            title: "Git",
            note: [
                {
                    text1: `You should know:

Branching strategies (feature, develop, release, main)
Merge vs Rebase
Resolving conflicts
Cherry-pick
Stash
Pull Requests
GitHub Actions basics`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "git log",
            note: [
                {
                    text1: ``,
                    code1: `
            # One commit per line
            git log --oneline

            # Show the last 5 commits
            git log -5

            # Show commits with a graph of branches
            git log --graph --oneline --all

            # Show files changed in each commit
            git log --stat

            # Show the actual code changes
            git log -p

            # Show commits by a specific author
            git log --author="Alice"

            # Show commits affecting a specific file
            git log -- path/to/file

            # Show commits since a date
            git log --since="2 weeks ago"

            # Show commits between two branches/commits
            git log main..feature

`
                }
            ]
        },
        {
            id: 1,
            title: "class",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
                {
            id: 1,
            title: "origin/main and origin/HEAD",
            note: [
                {
                    text1: `<b>1. origin/main</b> refers to the main branch on the remote repository named "origin". It is a reference to the state of the main branch on the remote server.
                    <b>origin</b> = the remote repository (usually GitHub, GitLab, Bitbucket, etc.)
                    <b>main</b> = the branch on that remote repository

                    <b>What it is</b>: A local pointer that remembers the last known state of the main branch on the remote server (origin).
<b>How it updates</b>: It is updated only when you run commands that communicate with the server, such as git fetch or git pull.
<b>Purpose</b>: It allows you to see the history of the remote branch without needing to be connected to the internet. When you run git status, Git compares your local main to origin/main to tell you if you are "ahead," "behind," or "diverged."

        <b>2. origin/HEAD</b> is a symbolic reference that points to the default branch of the remote repository named "origin". It usually points to the main branch, but it can point to any branch that is set as the default on the remote.
        <b>origin</b> = the remote repository (usually GitHub, GitLab, Bitbucket, etc.)
        <b>HEAD</b> = 

This is a symbolic reference (a pointer to a pointer).
    <b>What it is</b>: It points to the default branch that the remote server is configured to use.
    <b>How it works</b>: Think of it as a bookmark that the server keeps. If your remote server has set main as the default branch (the one that opens when you visit the repository URL), then origin/HEAD points to origin/main.
    <b>Purpose</b>: It tells your local Git client which branch is considered the "primary" or "default" branch on the server, even if the repository has many other branches.


    <b>origin/main</b> → remote main branch
    <b>origin/develop</b> → remote develop branch
    <b>origin/feature/login</b> → remote feature branch
    <b>origin/HEAD</b> → points to whichever branch is the default (currently main)

In a typical setup:
->     <b>origin/HEAD</b> points to <b>origin/main.</b>
-> <b>origin/main</b> points to a specific commit hash (e.g., a1b2c3d) on the server.


origin/HEAD -> origin/main
This means:
The default branch of the remote repository is main.
Think of it as a pointer.
origin/HEAD
      |
      v
origin/main
`,
                    code1: ``
                }
            ]
        },
                {
            id: 1,
            title: "git restore",
            note: [
                {
                    text1: `Introduced in Git 2.23, git restore is a command designed to simplify the process of discarding changes in your working directory or moving files between the staging area and the working directory. It is intended to be a more intuitive alternative to the older, overloaded git checkout command.
                    
                    Key Use Cases

    <b>Discarding local changes</b>: If you have modified a file in your working directory but haven't staged it yet, and you want to revert it to the version in the last commit:
    Bash
git restore &lt;file_name&gt;

<b>Unstaging a file</b>: If you have added a file to the staging area (git add) but want to remove it from staging while keeping your changes in the file:
Bash
git restore --staged &lt;file_name&gt;

<b>Restoring to a specific commit</b>: You can revert a file to its state as it existed in a specific commit:
Bash
git restore --source <commit_hash> &lt;file_name&gt;

<b>Why use git restore over git checkout?</b>
Historically, <b>git checkout</b> was used for two very different tasks: switching branches and discarding changes. This often led to confusion. <b>git restore</b> (along with <b>git switch</b>) splits these responsibilities, making it safer and clearer to perform file-level operations without accidentally switching your entire project to a different branch.

<b>Example Workflow</b>
git status
modified: App.java
modified: Utils.java

Discard changes to one file:
git restore App.java

Discard all changes:
git restore .

<b>Be Careful ⚠️</b>
git restore permanently discards uncommitted changes. Once restored, those changes cannot be recovered unless they were committed or saved elsewhere.

<b>git restore over git checkout</b>
they are <b>similar in this specific use case</b>, but they are not the same command overall.
<b>git checkout .</b>	Restore all modified tracked files (older syntax)
-> Restores all tracked files in the current directory and its subdirectories.
-> Discards uncommitted changes in the working directory.
-> This is the older syntax.
<b>git restore .</b>	Restore all modified tracked files (recommended)
-> Also restores all tracked files in the working directory.
-> Discards uncommitted changes.
-> This is the newer, recommended syntax (introduced in Git 2.23).


<b>git switch</b>: Used specifically for changing branches.
<b>git restore</b>: Used specifically for changing the state of files.

<b>Old command : </b>	
git checkout feature-1	
git checkout -b feature-1	
git checkout -- App.java	
git checkout .	

<b>Recommended command</b>
git switch feature-1
git switch -c feature-1
git restore App.java
git restore .

`,
                    code1: `# Restore one file
git restore file.txt

# Restore all files
git restore .

# Unstage one file
git restore --staged file.txt

# Unstage everything
git restore --staged .

# Restore from another commit
git restore --source=&lt;commit&gt; file.txt

# Restore staged and working tree
git restore --staged .
git restore .`
                }
            ]
        },
        {
            id: 1,
            section: "Linux (Must Know)",
            title: "class",
            note: [
                {
                    text1: `ls
cd
pwd
grep
find
tail -f app.log
ps -ef
top
chmod
chown
systemctl
scp
ssh`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "class",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "Maven/Gradle",
            title: "class",
            note: [
                {
                    text1: `For Spring Boot:

mvn clean install
mvn test
mvn spring-boot:run

You should understand:

Dependencies
Plugins
Build lifecycle
Profiles`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "class",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "Docker (Must Master)",
            title: "class",
            note: [
                {
                    text1: `Spring Boot Dockerfile

FROM eclipse-temurin:21

COPY target/app.jar app.jar

ENTRYPOINT ["java","-jar","app.jar"]

Build:

docker build -t my-app .

Run:

docker run -p 8080:8080 my-app

You should also know:

Docker Compose
Container networking
Volumes
Environment variables`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "class",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "Jenkins CI/CD (Good to Know)",
            title: "class",
            note: [
                {
                    text1: `Basic pipeline knowledge is enough:

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'mvn clean install'
            }
        }

        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }
}`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "class",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "AWS",
            title: "class",
            note: [
                {
                    text1: `Learn:

Amazon Web Services EC2
S3
RDS
IAM
Security Groups
Route 53
Elastic Beanstalk (optional)

You should be able to:

Launch a Linux server
Deploy Spring Boot applications
Configure a database
Upload files to S3`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "class",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "Kubernetes",
            title: "class",
            note: [
                {
                    text1: `Just understand:

Pods
Deployments
Services
ConfigMaps
Secrets

Example:

kubectl get pods
kubectl get services
kubectl logs app-pod`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "class",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },

    ]
}




