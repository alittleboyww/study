@echo off
:: ping -n 10 127.0.0.1

:: ��ʱʮ�� >nul Ϊ�������
:: ping -n 11 127.0.0.1 >nul
:: ������������д��
:: echo �ڶ���д��
:: ping 1 -n 1 -w 10000 2>nul 1>nul
:: echo �ڶ���д������

:: arp���棬һ��ip��ַ�������ַ��ӳ���
:: ������д���ĳ��ip����ȡ��Ӧ�������ַ������Ҫ����������ֵ��ֱ�Ӷ�arp���漴��
:: arp -a
:: arp �����������������ֶ������б��� ɾ�����߸���
:: start���� ����ִ�г��򣬴��ļ�
:: start ���ļ�.txt
:: ��С����ʽ���ļ� /min �� /max �ֱ�Ϊ��󻯺���С�����ļ�
:: start /min ���ļ�.txt
:: start build.bat
:: start python
:: ����word ������Ҫ��һ�� "" �����޷�����
:: start test.docx
:: start test1.doc

:: �ļ�����׷��
echo "׷�ӵ��ļ�����" >> ���ļ�.txt
:: �޿��д���ʽ
>>���ļ�.txt <nul set /p=�޿�������
:: �����������ִ���ʽ
>>���ļ�.txt set /p=��ʽ�������޿���<nul
:: start ���ļ�.txt

:: ɱ��ĳ�����̵��﷨
tasklist | find /i "TIM.exe" && taskkill /f /im "TIM.exe"

echo ����
:: %0 %1 %2 .... %9
:: %0 ������ǽű��ļ������·��
:: %0-%9 ����ű��ļ�����Ĳ��� 
echo ^|
echo %0
echo %1
echo %2
echo %3

if defined str goto next
set str=
set /p str=����ļ����������ں�س���
echo %~0
echo %str%
call "%~0" %str%
pause

:next
cls
echo ���������ļ�����·��Ϊ��"%~0"
echo �ϵ������ڵ��ļ�������·��Ϊ��"%~1"
goto :eof
pause




















