(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{859:function(s,n,a){"use strict";a.r(n);var t=a(5),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("img",{attrs:{src:"https://www.zpzpup.com/assets/image/npm/git01.jpg",alt:"下载安装包"}}),s._v(" "),a("p",[s._v("贴上链接")]),s._v(" "),a("blockquote",[a("p",[s._v("https://git-scm.com/download/win")])]),s._v(" "),a("p",[s._v("Workspace：工作区")]),s._v(" "),a("p",[s._v("Index / Stage：暂存区")]),s._v(" "),a("p",[s._v("Repository：仓库区（或本地仓库）")]),s._v(" "),a("p",[s._v("Remote：远程仓库")]),s._v(" "),a("p",[s._v("本地分支关联远程：git branch --set-upstream-to=origin/beta beta")]),s._v(" "),a("ul",[a("li",[s._v("新建代码库")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 在当前目录新建一个Git代码库\n$ git init\n\n# 新建一个目录，将其初始化为Git代码库\n$ git init [project-name]\n\n# 下载一个项目和它的整个代码历史\n$ git clone [url]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("配置")])]),s._v(" "),a("p",[s._v("Git的设置文件为.gitconfig，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# 显示当前的Git配置\n$ git config --list\n\n# 编辑Git配置文件\n$ git config -e [--global]\n\n# 设置提交代码时的用户信息\n$ git config [--global] user.name "[name]"\n$ git config [--global] user.email "[email address]"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[s._v("增加/删除文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 添加指定文件到暂存区\n$ git add [file1] [file2] ...\n\n# 添加指定目录到暂存区，包括子目录\n$ git add [dir]\n\n# 添加当前目录的所有文件到暂存区\n$ git add .\n\n# 添加每个变化前，都会要求确认\n# 对于同一个文件的多处变化，可以实现分次提交\n$ git add -p\n\n# 删除工作区文件，并且将这次删除放入暂存区\n$ git rm [file1] [file2] ...\n\n# 停止追踪指定文件，但该文件会保留在工作区\n$ git rm --cached [file]\n\n# 改名文件，并且将这个改名放入暂存区\n$ git mv [file-original] [file-renamed]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("ul",[a("li",[s._v("代码提交")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 提交暂存区到仓库区\n$ git commit -m [message]\n\n# 提交暂存区的指定文件到仓库区\n$ git commit [file1] [file2] ... -m [message]\n\n# 提交工作区自上次commit之后的变化，直接到仓库区\n$ git commit -a\n\n# 提交时显示所有diff信息\n$ git commit -v\n\n# 使用一次新的commit，替代上一次提交\n# 如果代码没有任何新变化，则用来改写上一次commit的提交信息\n$ git commit --amend -m [message]\n\n# 重做上一次commit，并包括指定文件的新变化\n$ git commit --amend [file1] [file2] ...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("ul",[a("li",[s._v("分支")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 列出所有本地分支\n$ git branch\n\n# 列出所有远程分支\n$ git branch -r\n\n# 列出所有本地分支和远程分支\n$ git branch -a\n\n# 新建一个分支，但依然停留在当前分支\n$ git branch [branch-name]\n\n# 新建一个分支，并切换到该分支\n$ git checkout -b [branch]\n\n# 新建一个分支，指向指定commit\n$ git branch [branch] [commit]\n\n# 新建一个分支，与指定的远程分支建立追踪关系\n$ git branch --track [branch] [remote-branch]\n\n# 切换到指定分支，并更新工作区\n$ git checkout [branch-name]\n\n# 切换到上一个分支\n$ git checkout -\n\n# 建立追踪关系，在现有分支与指定的远程分支之间\n$ git branch --set-upstream [branch] [remote-branch]\n\n# 合并指定分支到当前分支\n$ git merge [branch]\n\n# 选择一个commit，合并进当前分支\n$ git cherry-pick [commit]\n\n# 删除分支\n$ git branch -d [branch-name]\n\n# 删除远程分支\n$ git push origin --delete [branch-name]\n$ git branch -dr [remote/branch]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br")])]),a("ul",[a("li",[s._v("标签")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 列出所有tag\n$ git tag\n\n# 新建一个tag在当前commit\n$ git tag [tag]\n\n# 新建一个tag在指定commit\n$ git tag [tag] [commit]\n\n# 删除本地tag\n$ git tag -d [tag]\n\n# 删除远程tag\n$ git push origin :refs/tags/[tagName]\n\n# 查看tag信息\n$ git show [tag]\n\n# 提交指定tag\n$ git push [remote] [tag]\n\n# 提交所有tag\n$ git push [remote] --tags\n\n# 新建一个分支，指向某个tag\n$ git checkout -b [branch] [tag]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("ul",[a("li",[s._v("查看信息")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# 显示有变更的文件\n$ git status\n\n# 显示当前分支的版本历史\n$ git log\n\n# 显示commit历史，以及每次commit发生变更的文件\n$ git log --stat\n\n# 搜索提交历史，根据关键词\n$ git log -S [keyword]\n\n# 显示某个commit之后的所有变动，每个commit占据一行\n$ git log [tag] HEAD --pretty=format:%s\n\n# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件\n$ git log [tag] HEAD --grep feature\n\n# 显示某个文件的版本历史，包括文件改名\n$ git log --follow [file]\n$ git whatchanged [file]\n\n# 显示指定文件相关的每一次diff\n$ git log -p [file]\n\n# 显示过去5次提交\n$ git log -5 --pretty --oneline\n\n# 显示所有提交过的用户，按提交次数排序\n$ git shortlog -sn\n\n# 显示指定文件是什么人在什么时间修改过\n$ git blame [file]\n\n# 显示暂存区和工作区的差异\n$ git diff\n\n# 显示暂存区和上一个commit的差异\n$ git diff --cached [file]\n\n# 显示工作区与当前分支最新commit之间的差异\n$ git diff HEAD\n\n# 显示两次提交之间的差异\n$ git diff [first-branch]...[second-branch]\n\n# 显示今天你写了多少行代码\n$ git diff --shortstat "@{0 day ago}"\n\n# 显示某次提交的元数据和内容变化\n$ git show [commit]\n\n# 显示某次提交发生变化的文件\n$ git show --name-only [commit]\n\n# 显示某次提交时，某个文件的内容\n$ git show [commit]:[filename]\n\n# 显示当前分支的最近几次提交\n$ git reflog\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br")])]),a("ul",[a("li",[s._v("远程同步")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 下载远程仓库的所有变动\n$ git fetch [remote]\n\n# 显示所有远程仓库\n$ git remote -v\n\n# 显示某个远程仓库的信息\n$ git remote show [remote]\n\n# 增加一个新的远程仓库，并命名\n$ git remote add [shortname] [url]\n\n# 取回远程仓库的变化，并与本地分支合并\n$ git pull [remote] [branch]\n\n# 上传本地指定分支到远程仓库\n$ git push [remote] [branch]\n\n# 强行推送当前分支到远程仓库，即使有冲突\n$ git push [remote] --force\n\n# 推送所有分支到远程仓库\n$ git push [remote] --all\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("ul",[a("li",[s._v("撤销")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 恢复暂存区的指定文件到工作区\n$ git checkout [file]\n\n# 恢复某个commit的指定文件到暂存区和工作区\n$ git checkout [commit] [file]\n\n# 恢复暂存区的所有文件到工作区\n$ git checkout .\n\n# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变\n$ git reset [file]\n\n# 重置暂存区与工作区，与上一次commit保持一致\n$ git reset --hard\n\n# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变\n$ git reset [commit]\n\n# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致\n$ git reset --hard [commit]\n\n# 重置当前HEAD为指定commit，但保持暂存区和工作区不变\n$ git reset --keep [commit]\n\n# 新建一个commit，用来撤销指定commit\n# 后者的所有变化都将被前者抵消，并且应用到当前分支\n$ git revert [commit]\n\n# 暂时将未提交的变化移除，稍后再移入\n$ git stash\n$ git stash pop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("ul",[a("li",[s._v("其他")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 生成一个可供发布的压缩包\n$ git archive\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"git-相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-相关"}},[s._v("#")]),s._v(" Git 相关")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("reset 与 rebase, pull 与 fetch 的区别\ngit reset 不修改 commit 相关的东西，只会去修改.git 目录下的东西。")]),s._v(" "),a("p",[s._v("git rebase 会试图修改你已经 commit 的东西，比如覆盖 commit 的历史等，但是不能使用 rebase 来修改已经 push 过的内容，容易出现兼容性问题。rebase还可以来解决内容的冲突，解决两个人修改了同一份内容，然后失败的问题。")]),s._v(" "),a("p",[s._v("git pull pull=fetch+merge,使用git fetch 是取回远端更新，不会对本地执行merge操作，不会去 动你的本地的内容。pull 会更新你本地代码到服务器上对应分支的最新版本。")])]),s._v(" "),a("li",[a("p",[s._v("git merge 和 git rebase 的区别\ngit merge 把本地代码和已经取得的远程仓库代码合并。")]),s._v(" "),a("p",[s._v("git rebase 是复位基底的意思，gitmerge 会生成一个新的节点，之前的提交会分开显示，而 rebase 操作不会生成新的操作，将两个分支融合成一个线性的提交。")])]),s._v(" "),a("li",[a("p",[s._v("git 如何解决代码冲突\ngit stash")]),s._v(" "),a("p",[s._v("git pull")]),s._v(" "),a("p",[s._v("git stash pop")]),s._v(" "),a("p",[s._v("这个操作就是把自己修改的代码隐藏，然后把远程仓库的代码拉下来，然后把自己隐藏的修改的代码释放出 来，让 git 自动合并。")]),s._v(" "),a("p",[s._v("如果要代码库的文件完全覆盖本地版本。")]),s._v(" "),a("p",[s._v("git reset –hard")]),s._v(" "),a("p",[s._v("git pull")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);