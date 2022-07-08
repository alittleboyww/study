@echo off

set /p inputVal=请输入一个数字
:: equ 等于
:: gtr 大于
:: geq 大于等于
:: lss 小于
:: leq 小于等于
:: neq 不等于
if %inputVal% geq 10 (
	if %inputVal% equ 10 (
		echo 输入的值等于10
	) else (
		echo 输入的值大于10
	)
)
if %inputVal% lss 9 (
	if %inputVal% leq 8 (
		if %inputVal% equ 8 (
			echo 输入的值等于8
		)
		if %inputVal% gtr 5 (
			echo 输入的值大于5
		)
	)
)

:: 存在某个文件
if exist filename.txt (
	echo "exist"
)
:: 不存在某个文件
if not exist filename.txt (
	echo "not exist"
)
:: 去除文件文件夹属性
dir /a-d test.txt >nul 2>nul
echo %errorlevel%
:: 判断 文件test.txt 是否存在
if %errorlevel% == 0 (
	echo "test.txt 文件存在"
) else (
	echo "test.txt 文件不存在"
)

:: 判断文件夹是否存在
if exist test\ (
	echo "test是文件夹"
)

:: 判断变量是否存在
if defined str (
	echo 变量str存在
)


set var1=5
if defined var1 (echo 变量var1已定义) else (echo 变量var1没有被定义)
set /p var2=请输入一个数字:
if defined var2 (echo 变量var2已定义) else (echo 变量var2没有被定义)

pause


