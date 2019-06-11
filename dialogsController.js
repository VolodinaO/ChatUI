
angular.module('myApp', []).controller('dialogsCtrl', function($scope) {
    // Для добавления данных в общее окно диалога
    $scope.messages = [
        {
            position:'left',
            darker:'',
            avatarPath:'images/avatar1.png',
            textMessage:'Привет! Как дела? ',
            smile:'far fa-smile-beam',
            isPreview: 'none',
            hrefLinks:'',
            time:'Сегодня, 11:00'
        },
        {
            position:'right',
            darker:'darker',
            avatarPath:'images/avatar2.png',
            textMessage:'Привет! Хорошо. А у тебя как дела? ',
            smile:'',
            isPreview: 'none',
            hrefLinks:'',
            time:'Сегодня, 11:01'
        },
        {
            position:'left',
            darker:'',
            avatarPath:'images/avatar1.png',
            textMessage:'Прекрасно. Только я не помню, что нам задали на последних лабах. ',
            smile:'far fa-grin-beam-sweat',
            isPreview: 'none',
            hrefLinks:'',
            time:'Сегодня, 11:02'
        },
        {
            position:'right',
            darker:'darker',
            avatarPath:'images/avatar2.png',
            textMessage:'Окей, сейчас дам ссылку на задание. ',
            smile:'far fa-frown',
            isPreview: 'none',
            hrefLinks:'',
            time:'Сегодня, 11:05'
        },
        {
            position:'right',
            darker:'darker',
            avatarPath:'images/avatar2.png',
            textMessage:'Держи. ',
            smile:'',
            isPreview: 'none',
            hrefLinks:'https://drive.google.com/drive/folders/1lYAwjdzEHigrmlIHwyqOFeVeIwaUUwtC',
            time:'Сегодня, 11:07'
        },
        {
            position:'right',
            darker:'darker',
            avatarPath:'images/avatar2.png',
            textMessage:'',
            smile:'',
            isPreview: 'block',
            hrefLinks:'',
            preview: {
                    previewImgPath:'images/drive.png',
                    hrefLink:'https://drive.google.com/drive/folders/1lYAwjdzEHigrmlIHwyqOFeVeIwaUUwtC',
                    hrefText:'GUI - Google Диск',
                    previewText:'drive.google.com'
            },
            time:'Сегодня, 11:07'
        },
        {
            position:'left',
            darker:'',
            avatarPath:'images/avatar1.png',
            textMessage:'Спасибо большое! ',
            smile:'',
            isPreview: 'none',
            hrefLinks:'',
            time:'Сегодня, 11:08'
        },
        {
            position:'left',
            darker:'',
            avatarPath:'images/avatar1.png',
            textMessage:'Кстати, мы завтра собираемся с друзьями на шашлыки. ',
            smile:'',
            isPreview: 'none',
            hrefLinks:'',
            time:'Сегодня, 11:08'
        },
        {
            position:'left',
            darker:'',
            avatarPath:'images/avatar1.png',
            textMessage:'Хочешь с нами? ',
            smile:'',
            isPreview: 'none',
            hrefLinks:'',
            time:'Сегодня, 11:09'
        },
        {
            position:'right',
            darker:'darker',
            avatarPath:'images/avatar2.png',
            textMessage:'Ну, я не против. ',
            smile:'',
            isPreview: 'none',
            hrefLinks:'',
            time:'Сегодня, 11:10'
        },
        {
            position:'left',
            darker:'',
            avatarPath:'images/avatar1.png',
            textMessage:'Окей. Тогда я напишу тебе чуть позже обо всем. ',
            smile:'',
            isPreview: 'none',
            hrefLinks:'',
            time:'Сегодня, 11:11'
        },
        {
            position:'left',
            darker:'',
            avatarPath:'images/avatar1.png',
            textMessage:'Ладно, тогда до завтра. ',
            smile:'',
            isPreview: 'none',
            hrefLinks:'',
            time:'Сегодня, 11:12'
        },
        {
            position:'right',
            darker:'darker',
            avatarPath:'images/avatar2.png',
            textMessage:'Пока. ',
            smile:'',
            isPreview: 'none',
            hrefLinks:'',
            time:'Сегодня, 11:14'
        }
    ];
    
    // Для добавления данных в боковое окно с диалогами
    $scope.dialogs = [
        {
            contact:'Игнат Бадур',
            avatarPath:'images/avatar1.png',
            textMessage:'Сделать задание.',
            darker:'',
            smile:'',
            time:'Сегодня, 11:16'
        },
        {
            contact:'Иван Иванов',
            avatarPath:'images/avatar2.png',
            textMessage:'Пока.',
            darker:'darker',
            smile:'',
            time:'Сегодня, 11:14'
        },
        {
            contact:'Антон Антонов',
            avatarPath:'images/avatar3.png',
            textMessage:'Ты сделал задание?',
            darker:'darker',
            smile:'',
            time:'Сегодня, 10:10'
        },
        {
            contact:'Чудо Женщина',
            avatarPath:'images/avatar4.png',
            textMessage:'Привет.',
            darker:'',
            smile:'',
            time:'Чт'
        },
        {
            contact:'Алла Александрова',
            avatarPath:'images/avatar5.png',
            textMessage:'До завтра.',
            darker:'',
            smile:'',
            time:'11.04'
        },
        {
            contact:'Наталья Сергеева',
            avatarPath:'images/avatar6.png',
            textMessage:'Ну такое.',
            darker:'darker',
            smile:'',
            time:'22.03'
        },
        {
            contact:'Милана Альбертова',
            avatarPath:'images/avatar7.png',
            textMessage:'Да.',
            darker:'darker',
            smile:'',
            time:'21.03'
        },
        {
            contact:'Наталья Додонова',
            avatarPath:'images/avatar8.png',
            textMessage:'Нет, я не знаю.',
            darker:'',
            smile:'',
            time:'Сегодня, 11:16'
        },
        {
            contact:'Даниил Страхов',
            avatarPath:'images/avatar9.png',
            textMessage:'До скорого.',
            smile:'',
            darker:'darker',
            time:'20.02'
        },
        {
            contact:'Алекс Ушаков',
            avatarPath:'images/avatar10.png',
            textMessage:'',
            smile:'far fa-smile-beam',
            darker:'darker',
            time:'19.02'
        }
    ];
});