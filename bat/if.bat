@echo off

set /p inputVal=������һ������
:: equ ����
:: gtr ����
:: geq ���ڵ���
:: lss С��
:: leq С�ڵ���
:: neq ������
if %inputVal% geq 10 (
	if %inputVal% equ 10 (
		echo �����ֵ����10
	) else (
		echo �����ֵ����10
	)
)
if %inputVal% lss 9 (
	if %inputVal% leq 8 (
		if %inputVal% equ 8 (
			echo �����ֵ����8
		)
		if %inputVal% gtr 5 (
			echo �����ֵ����5
		)
	)
)

:: ����ĳ���ļ�
if exist filename.txt (
	echo "exist"
)
:: ������ĳ���ļ�
if not exist filename.txt (
	echo "not exist"
)
:: ȥ���ļ��ļ�������
dir /a-d test.txt >nul 2>nul
echo %errorlevel%
:: �ж� �ļ�test.txt �Ƿ����
if %errorlevel% == 0 (
	echo "test.txt �ļ�����"
) else (
	echo "test.txt �ļ�������"
)

:: �ж��ļ����Ƿ����
if exist test\ (
	echo "test���ļ���"
)

:: �жϱ����Ƿ����
if defined str (
	echo ����str����
)


set var1=5
if defined var1 (echo ����var1�Ѷ���) else (echo ����var1û�б�����)
set /p var2=������һ������:
if defined var2 (echo ����var2�Ѷ���) else (echo ����var2û�б�����)

pause


