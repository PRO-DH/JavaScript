

var greeting;
greeting = 'hello';
greeting = "�ȳ�~~";
greeting = `�߰�!`;

console.log(typeof greeting);

var str = '�״� ������ "�ȳ�"�̶�� ���ߴ�.';
console.log(str);

var str2 = "Let's Go!";
console.log(str2);

var str3 = "�״� ������ \"�ȳ�\"�̶�� ���ߴ�.";
console.log(str3);

var str4 = 'Let\'s Go! \"together\"';

//Ż�� ����
var str5 = '�۸���\n\n\n�߿���';
console.log(str5);

var str6 = '�۸���\t\t\t�߿���';
console.log(str6);

var filePath = 'D:\\temp\\new.png';
console.log(filePath);

//���ø� ���ͷ� (ES6+ ����)
// var tag = '<ul>\n\t<li><a href="#">���̹���ũ</a></li>\n</ul>';

var tag = `
<ul>
    <li>
        <a href="#">���̹���ũ</a>
    </li>
</ul>`;

console.log(tag);

var month = 3;
var day = 1;
var anniversary = '������';

console.log(month + '�� ' + day + '���� ' + anniversary + '�Դϴ�.');
console.log(`${month}�� ${day}���� ${anniversary}�Դϴ�.`);