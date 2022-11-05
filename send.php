<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "5559993302:AAFnCMsubCZDobn_5CMZLgHebINHluYXK9g";

//Сюда вставляем chat_id
$chat_id = "579085115";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
   
    $phone = ($_POST['phone']);

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Phone:' => $phone
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
        alert('Sended');
    }

//А здесь сообщение об ошибке при отправке
    else {
        alert('Error');
    }
}

?>
