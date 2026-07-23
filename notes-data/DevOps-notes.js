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
            title: "Merge vs Rebase",
            note: [
                {
                    text1: `<b>1. git merge</b>
    <b>What it is</b>: A non-destructive way to integrate changes. It takes the contents of a source branch and combines them with the target branch.
    <b>How it works</b>: It creates a brand-new "merge commit" on the target branch that has two parent commits (representing the meeting point of both branches).
    <b>Pros</b>: Preserves the exact historical timeline and context of when branches diverged and came back together.
    <b>Cons</b>: If you have many developers working concurrently, your project history can become cluttered with numerous merge commits.

    <b>2. git rebase</b>
    <b>What it is</b>: A linear history rewriting tool. It takes your feature branch commits and "re-plants" them on top of the tip of another branch (like main).
    <b>How it works</b>: Instead of creating a merge commit, Git rewrites the commit history by generating brand-new commit hashes for your changes as if you had started your work from the latest version of the target branch.
    <b>Pros</b>: Results in a clean, strictly linear project history that is much easier to read through tools like git log.
    <b>Cons</b>: Rewrites history. You should never rebase commits that have already been pushed to a shared remote repository, as it forces other collaborators to deal with broken or mismatched history.
    
    <b>Merge</b> combines two branches by creating a new merge commit, preserving the original branch history.
<b>Rebase</b> moves a branch to a new base by replaying its commits on top of another branch, creating a cleaner, linear history but rewriting commit hashes.
Use <b>merge</b> for shared branches and rebase for cleaning up your own feature branch before integration.

    <b>git merge</b> and <b>git rebase</b> are both used to integrate changes from one branch into another, but they do so in fundamentally different ways. The choice between them often depends on your team's workflow preferences and the importance of maintaining a clean commit history versus preserving the exact historical context of changes.
    
    <b>Visual Example</b>
Suppose your Git history looks like this:
main
A --- B --- C
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    \\
feature       D --- E


main has commits: A → B → C
feature has commits: D → E

Now, someone adds two commits to main:
main
A --- B --- C --- F --- G
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    \\  
feature     &nbsp; &nbsp; &nbsp; &nbsp;  D --- E

You want to bring the latest changes from <b>main</b> into <b>feature</b>.

<b>Option 1: Merge</b>
git checkout feature
git merge main

Git creates a <b>new merge commit</b>.
A --- B --- C --- F --- G
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; \\     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;     \\
            &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D --- E ---- M
D and E stay exactly as they were.
Git adds a merge commit M.
History shows the actual branching and merging.
<b>Advantages</b>
-> Safe (doesn't rewrite history).
-> Preserves the real development history.
-> Good for shared/public branches.
<b>Disadvantages</b>
-> Creates extra merge commits.
-> History can become cluttered.

<b>Option 2: Rebase</b>
git checkout feature
git rebase main

Git does <b>not</b> create a merge commit.
<b>Instead it:</b>
Temporarily removes D and E.
Moves feature to G.
Replays D and E on top of G.
A --- B --- C --- F --- G --- D' --- E'

<b>Notice:</b>
D becomes D'
E becomes E'

These are <b>new commits</b> with new commit hashes.
History becomes linear.

<b>What Actually Happens During Rebase</b>
Original:
A --- B --- C
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; \\
            &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D --- E

Main moves ahead:
A --- B --- C --- F --- G
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  \\    
            &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D --- E

After rebase:
A --- B --- C --- F --- G --- D' --- E' 
Git literally copies your commits and reapplies them.


<b>Which One is Better?</b>
Use Merge
Shared branches
Team collaboration
<b>main</b>
<b>develop</b>
Release branches

Example:
feature  ---> develop
develop  ---> main
Merge is usually preferred.

<b>Use Rebase</b>
Updating your own feature branch with the latest main
Before creating a Pull Request
Keeping history clean

Example:
git checkout feature
git fetch origin
git rebase origin/main

<b>Rule You Should Remember</b>
Never rebase public/shared branches.
If others have already pulled the branch, rebasing changes commit history and can cause problems for collaborators.


`,
                    code1: `// ------------ Real-Time Team Workflow -------------
// Suppose:
main
// Create feature:
git checkout -b feature/login

// You make commits:
login-1
login-2

// Meanwhile:
main
// gets new commits:
payment
notification

// Before raising a PR:
git fetch origin
git rebase origin/main

// Resolve conflicts if needed:
git add .
git rebase --continue

// Push the rebased branch:
git push --force-with-lease

// Then create the Pull Request.
`
                }
            ]
        },
        {
            id: 1,
            title: "cherry-pick",
            note: [
                {
                    text1: `git cherry-pick is a powerful Git command that allows you to take a specific commit from one branch and apply (or "copy") it onto your current working branch. Instead of merging an entire branch with all of its accumulated changes, cherry-picking lets you hand-pick a single commit or a specific range of commits.
                    
                    git cherry-pick is used to <b>copy a specific commit (or commits) from one branch and apply it to another branch</b> without merging the entire branch.
                    
                    <b>How It Works</b>             
    <b>Identify the Commit</b>: You find the hash of the specific commit you want to copy (using git log).
    <b>Switch to Target Branch</b>: Ensure you are checked out on the branch where you want to apply the change.
    <b>Run the Command</b>: Execute git cherry-pick &lt;commit-hash&gt;.

                    <b>When to use cherry-pick</b>
Suppose you have:
main
feature/login

You made three commits in <b>feature/login</b>:
A -- B -- C
But only commit <b>B</b> contains a bug fix that you need in <b>main</b>.
Instead of merging the whole branch, you can cherry-pick commit <b>B</b>.


<b>Example</b>
<b>Step 1: Find the commit hash</b>
git log --oneline

<b>Output</b>:
a1b2c3d Add login page
d4e5f6g Fix login validation
h7i8j9k Improve UI

Suppose you want:
d4e5f6g Fix login validation

<b>Step 2: Switch to the target branch</b>
git checkout main
or
git switch main

<b>Step 3: Cherry-pick the commit</b>
git cherry-pick d4e5f6g

Git creates a new commit on main with the same changes.
<b>Before:</b>
feature
A -- B -- C
main
A

<b>After:</b>
feature
A -- B -- C
main
A -- B'

<b>B'</b> is a new commit with a different commit ID but the same changes as <b>B</b>.


<b>Cherry-pick multiple commits</b>
Pick individual commits
git cherry-pick abc123 def456 ghi789

Pick a range of commits
git cherry-pick A^..D

This includes:
A
B
C
D

<b>If there are conflicts</b>
Git pauses and shows conflict files.
Resolve the conflicts, then run:

git add .
git cherry-pick --continue

To cancel the cherry-pick:
git cherry-pick --abort

<b>Common use cases</b>
1. Move a bug fix to another branch
feature
|
|-- Bug Fix
|-- New Feature

Only move the bug fix to main.
`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Stash",
            note: [
                {
                    text1: `<b>git stash</b> is used to <b>temporarily save your uncommitted changes</b> (both staged and unstaged) without committing them. This lets you switch branches, pull changes, or work on something else, then come back later and restore your work.
                    
                    git stash is a handy Git command that temporarily shelves (or "stashes") changes you've made to your working directory so you can work on something else, without needing to commit unfinished work.
                    
                    When you run git stash, it takes your uncommitted changes (both staged and unstaged) and saves them on a stack of unfinished changes, reverting your working directory to match the last commit.
                    
                    <b>1. Check your changes</b>
git status
Example:
modified: src/App.js
modified: src/index.css

<b>2. Stash the changes</b>
git stash

Or add a descriptive message:
git stash push -m "Working on login feature"
Now your working directory becomes clean.

<b>View all stashes</b>
git stash list

Example:
stash@{0}: On feature/login: Working on login feature
stash@{1}: On main: Fix navbar issue

<b>Apply the latest stash</b>
git stash apply
This restores the changes but keeps the stash in the stash list.

<b>Apply a specific stash</b>
git stash apply stash@{1}

<b>Apply and remove the stash</b>
git stash pop
This applies the most recent stashed changes back into your working directory and removes them from the stash list. (If you want to apply them without removing them from the list, use git stash apply instead).
-> Restores the changes
-> Removes the stash from the stash list

<b>Delete a stash</b>
Delete one stash:--
git stash drop stash@{0}

Delete all stashes:--
git stash clear

<b>Discard a stash</b>:
Bash
git stash drop

<b>Create a new branch from a stash</b>
Very useful if you decide the stashed work should be on a separate branch.
git stash branch feature/new-work stash@{0}
`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "untracked files",
            note: [
                {
                    text1: `<b>Untracked files</b> are files that exist in your working directory but are not yet being tracked by Git.
                    
                    `,
                    code1: ``
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




