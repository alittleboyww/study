@echo off
REM  ����ס��
SET /A a=5 
SET /A b=10 
SET /A c=%a% + %b% 
echo %c%
echo �����������
REM ������� . ����ʹ�� ����������]��\ 
echo.
echo �����Ƿ��п��У�

set dirPath=D:\Files\Study\bat\testDir

REM ����ɾ��Ŀ¼��ȷ��  �ٲ���һ��echo | �ܵ�����
REM rd /s D:\Files\Study\bat\testDir
if exist %dirPath% (
	echo Y|rd /s %dirPath%
) else (
	echo Ŀ¼������
)

REM ���ļ���д���ݻ����ļ�
echo �ļ����� > �ļ�����.txt
echo/ > ���ļ�.txt

if not exist "%dirPath%" (
	echo ����%dirPath%
	mkdir %dirPath%
)
D:
cd %dirPath%
if not exist testDir (
	echo ����testDir
	mkdir testDir
)

cd ..
echo ��ǰ·�� %cd%
cd /
echo ��ǰ·�� %cd%

cd D:\Files\Study\bat

echo DIR /A ������
DIR /A
echo DIR /B ������
DIR /B
echo DIR /-C ������
DIR /-C
REM �ļ���С����ǧ�ַ�
echo DIR /C ������
DIR /C
echo DIR /D ������
DIR /D
REM Сд
echo DIR /L ������
DIR /L
echo DIR /N ������
DIR /N
REM ��ʾ�û���
echo DIR /Q ������
DIR /Q
echo DIR ����һЩ�������� ��ȫ��չʾ ��ʾ����һ��������


echo ��ʾ�ļ�����"[R|-R][A|-A][S|-S][H|-H]"
ATTRIB index.js
echo ����index.js�������ļ�����
ATTRIB +h index.js
echo ȡ��index.js�������ļ�����
ATTRIB -h index.js

cd %dirPath%

if not exist test1Dir (
	mkdir test1Dir
)

FOR /L %%i in (1,1,10) do (
	echo �����ļ�%%i,Ȼ��������Ϊ��������
	echo ������������ > ��������%%i.txt
)

ATTRIB +h %dirPath%\*.txt /s

echo �������ļ�����
ATTRIB +h %dirPath% /s /d

:: �ļ�ɾ��

del /ah ��������1.txt
:: ɾ���ļ�ǰ����ȷ��

echo Y|del /ah /p ��������2.txt
echo ɾ����������2��ʣ����ļ�

ATTRIB +r ��������3.txt
ATTRIB ��������3.txt
:: ǿ��ɾ��ֻ���ļ�
del /ah /f ��������3.txt
echo ɾ����������3��ʣ����ļ�

cd %dirPath%\testDir
echo Ӱ������%dirPath% > ��������4.txt
ATTRIB ��������4.txt
cd ..
echo ��������Ŀ¼��ɾ��ָ���ļ�
del /ah /a /s ��������4.txt

for %%i in (.\*.txt) do echo %%i


:: �ļ�����
cd %dirPath%
if not exist copyDir (
	mkdir copyDir
)
ATTRIB -h ��������10.txt
copy ��������10.txt .\copyDir

FOR /L %%i in (1,1,5) do (
	echo copyfile > copyfile%%i.txt
)
:: ͨ��/y����������������ͬ�ļ���ֱ��ѡ����и���/y
copy .\copyfile?.* .\copyDir /y

:: �ϲ��ļ�����
copy /b .\copyfile1.txt+.\copyfile5.txt .\copyfile6.txt

:: �����ļ���
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
:: ��������ļ�Ϊ�������� ���� /h ����
ATTRIB +h copyfile1.txt
cd oneFileDir
echo onFileDir > oneFileDir.txt
cd %dirPath%
:: /s���� ����ֵ�ǿ�Ŀ¼ /y�������ļ�ֱ�Ӹ��ǲ�����ʾ
xcopy /s /y .\copyDir .\copyDir_dist
if not exist copyDir_dist1 (
	mkdir copyDir_dist1
)
:: ���ư����ǿ�Ŀ¼
xcopy /e /y .\copyDir .\copyDir_dist1
if not exist copyDir_dist2 (
	mkdir copyDir_dist2
)
:: ���ư��������ļ���ϵͳ�ļ�
xcopy /e /h .\copyDir .\copyDir_dist2
:: ֻ����Ŀ¼�ṹ
if not exist copyDir_dist3 (
	mkdir copyDir_dist3
)
xcopy /e /t .\copyDir .\copyDir_dist3

:: ɾ���ļ�Ŀ¼
rd copyDir_dist3
:: ��Ҫͨ�� /s���� ����ɾ���ǿ�Ŀ¼ ����Ҫȷ��
echo Y|rd /s copyDir_dist3
:: ��/s�Ļ����ϼ���/q���� ����ֱ��ɾ�� ����Ҫȷ��
rd /s /q copyDir_dist2

:: �����ļ���Ŀ¼
cd copyDir_dist1
ren ��������10.txt copyfile6.txt
cd ../
ren %dirPath%\copyDir_dist1 copyDir_dist1_rename

:: �ƶ��ļ���Ŀ¼
:: ͨ��/y�ڶ��ڴ��ڸ��ǵ�����½���ֱ�Ӹ���
move copyDir copyDir_dist
move copyfile1.txt copyDir_dist\copyfile2.txt

REM ����FORѭ��

FOR %%I in (www.gbmonkey.com) do echo %%I

FOR %%I in (www,gbmonkey,com) do echo %%I

set str=s t r i n g c d h
echo Ӳ�̷���

FOR %%I in (%str%) do if exist %%I: echo %%I:

FOR %%I in (1,1,10) do echo %%I



































pause