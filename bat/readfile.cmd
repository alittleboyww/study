@echo off
REM ��delims=,   ��ʾÿһ�������Ѷ��Ž��зָ� ��дĬ���ǿո���зָ
REM ��tokens=1|tokens=1,2|tokens=*��ʾȡ�ָ��ĵڼ��Σ�Ȼ��ֵ��������
:: �����������һ��Ϊ %%i �����ȡ��ʱ������ĸ˳�ӣ����ڶ���Ϊ %%j,�Դ�˳�ӡ�
for /f "tokens=*" %%i in (index.js) do (
	echo "%%i"
	if "%%i" == "baseUrl: "http://10.4.101.17:8088/kmsp/services/RestService"" (
		pause
	)
)

pause