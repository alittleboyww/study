@echo off
REM ”delims=,   表示每一行数据已逗号进行分割 不写默认是空格进行分割“
REM ”tokens=1|tokens=1,2|tokens=*表示取分割后的第几段，然后赋值给参数“
:: ”参数如个第一个为 %%i 则后面取的时候按照字母顺延，即第二个为 %%j,以此顺延“
for /f "tokens=*" %%i in (index.js) do (
	echo "%%i"
	if "%%i" == "baseUrl: "http://10.4.101.17:8088/kmsp/services/RestService"" (
		pause
	)
)

pause