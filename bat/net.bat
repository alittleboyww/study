@echo off
:: ping -n 10 127.0.0.1

:: 延时十秒 >nul 为屏蔽输出
:: ping -n 11 127.0.0.1 >nul
:: 或者下面这种写法
:: echo 第二种写法
:: ping 1 -n 1 -w 10000 2>nul 1>nul
:: echo 第二种写法结束

:: arp缓存，一个ip地址和物理地址的映射表
:: 如果表中存在某个ip，则取对应的物理地址，不需要再请求物理值，直接读arp缓存即可
:: arp -a
:: arp 还有其他参数可以手动更新列表缓存 删除或者更新
:: start命令 可以执行程序，打开文件
:: start 空文件.txt
:: 最小化方式打开文件 /min 和 /max 分别为最大化和最小化打开文件
:: start /min 空文件.txt
:: start build.bat
:: start python
:: 启动word 可能需要加一个 "" 否则无法启动
:: start test.docx
:: start test1.doc

:: 文件内容追加
echo "追加的文件内容" >> 空文件.txt
:: 无空行处理方式
>>空文件.txt <nul set /p=无空行内容
:: 或者下面这种处理方式
>>空文件.txt set /p=方式二处理无空行<nul
:: start 空文件.txt

:: 杀死某个进程的语法
tasklist | find /i "TIM.exe" && taskkill /f /im "TIM.exe"

echo 这是
:: %0 %1 %2 .... %9
:: %0 输出的是脚本文件本身的路径
:: %0-%9 输出脚本文件传入的参数 
echo ^|
echo %0
echo %1
echo %2
echo %3

if defined str goto next
set str=
set /p str=请把文件拉到本窗口后回车：
echo %~0
echo %str%
call "%~0" %str%
pause

:next
cls
echo 本批处理文件完整路径为："%~0"
echo 拖到本窗口的文件名完整路径为："%~1"
goto :eof
pause




















