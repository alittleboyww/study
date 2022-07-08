@echo off
REM  试试住宿
SET /A a=5 
SET /A b=10 
SET /A c=%a% + %b% 
echo %c%
echo 测试输出空行
REM 空行输出 . 可以使用 ，：；”／]＋\ 
echo.
echo 上面是否有空行？

set dirPath=D:\Files\Study\bat\testDir

REM 测试删除目录后确认  再测试一下echo | 管道命令
REM rd /s D:\Files\Study\bat\testDir
if exist %dirPath% (
	echo Y|rd /s %dirPath%
) else (
	echo 目录不存在
)

REM 向文件里写内容或者文件
echo 文件内容 > 文件内容.txt
echo/ > 空文件.txt

if not exist "%dirPath%" (
	echo 创建%dirPath%
	mkdir %dirPath%
)
D:
cd %dirPath%
if not exist testDir (
	echo 创建testDir
	mkdir testDir
)

cd ..
echo 当前路径 %cd%
cd /
echo 当前路径 %cd%

cd D:\Files\Study\bat

echo DIR /A 的内容
DIR /A
echo DIR /B 的内容
DIR /B
echo DIR /-C 的内容
DIR /-C
REM 文件大小包含千分符
echo DIR /C 的内容
DIR /C
echo DIR /D 的内容
DIR /D
REM 小写
echo DIR /L 的内容
DIR /L
echo DIR /N 的内容
DIR /N
REM 显示用户名
echo DIR /Q 的内容
DIR /Q
echo DIR 还有一些其他参数 不全做展示 显示还有一部分内容


echo 显示文件属性"[R|-R][A|-A][S|-S][H|-H]"
ATTRIB index.js
echo 设置index.js的隐藏文件属性
ATTRIB +h index.js
echo 取消index.js的隐藏文件属性
ATTRIB -h index.js

cd %dirPath%

if not exist test1Dir (
	mkdir test1Dir
)

FOR /L %%i in (1,1,10) do (
	echo 创建文件%%i,然后将其设置为隐藏属性
	echo 设置隐藏属性 > 隐藏属性%%i.txt
)

ATTRIB +h %dirPath%\*.txt /s

echo 批处理文件属性
ATTRIB +h %dirPath% /s /d

:: 文件删除

del /ah 隐藏属性1.txt
:: 删除文件前进行确认

echo Y|del /ah /p 隐藏属性2.txt
echo 删除隐藏属性2后剩余的文件

ATTRIB +r 隐藏属性3.txt
ATTRIB 隐藏属性3.txt
:: 强制删除只读文件
del /ah /f 隐藏属性3.txt
echo 删除隐藏属性3后剩余的文件

cd %dirPath%\testDir
echo 影藏属性%dirPath% > 隐藏属性4.txt
ATTRIB 隐藏属性4.txt
cd ..
echo 从所有子目录中删除指定文件
del /ah /a /s 隐藏属性4.txt

for %%i in (.\*.txt) do echo %%i


:: 文件复制
cd %dirPath%
if not exist copyDir (
	mkdir copyDir
)
ATTRIB -h 隐藏属性10.txt
copy 隐藏属性10.txt .\copyDir

FOR /L %%i in (1,1,5) do (
	echo copyfile > copyfile%%i.txt
)
:: 通过/y参数来处理当存在相同文件是直接选择进行覆盖/y
copy .\copyfile?.* .\copyDir /y

:: 合并文件功能
copy /b .\copyfile1.txt+.\copyfile5.txt .\copyfile6.txt

:: 复制文件夹
if not exist copyDir_dist (
	mkdir copyDir_dist
)
cd copyDir
if not exist emptyDir (
	mkdir emptyDir
)
if not exist oneFileDir (
	mkdir oneFileDir
)
:: 设置这个文件为隐藏属性 参数 /h 参数
ATTRIB +h copyfile1.txt
cd oneFileDir
echo onFileDir > oneFileDir.txt
cd %dirPath%
:: /s参数 不赋值非空目录 /y则重名文件直接覆盖不做提示
xcopy /s /y .\copyDir .\copyDir_dist
if not exist copyDir_dist1 (
	mkdir copyDir_dist1
)
:: 复制包含非空目录
xcopy /e /y .\copyDir .\copyDir_dist1
if not exist copyDir_dist2 (
	mkdir copyDir_dist2
)
:: 复制包含隐藏文件和系统文件
xcopy /e /h .\copyDir .\copyDir_dist2
:: 只复制目录结构
if not exist copyDir_dist3 (
	mkdir copyDir_dist3
)
xcopy /e /t .\copyDir .\copyDir_dist3

:: 删除文件目录
rd copyDir_dist3
:: 需要通过 /s参数 才能删除非空目录 但需要确认
echo Y|rd /s copyDir_dist3
:: 在/s的基础上加上/q参数 可以直接删除 不需要确认
rd /s /q copyDir_dist2

:: 重名文件和目录
cd copyDir_dist1
ren 隐藏属性10.txt copyfile6.txt
cd ../
ren %dirPath%\copyDir_dist1 copyDir_dist1_rename

:: 移动文件和目录
:: 通过/y在对于存在覆盖的情况下进行直接覆盖
move copyDir copyDir_dist
move copyfile1.txt copyDir_dist\copyfile2.txt

REM 测试FOR循环

FOR %%I in (www.gbmonkey.com) do echo %%I

FOR %%I in (www,gbmonkey,com) do echo %%I

set str=s t r i n g c d h
echo 硬盘分区

FOR %%I in (%str%) do if exist %%I: echo %%I:

FOR %%I in (1,1,10) do echo %%I



































pause