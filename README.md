Test tasks from the Midnight Coders company

Тестовое задание для позиции
JavaScript разработчик. Миднайт Кодерс Украина

Используя Backbone (или AngularJS) а также RequireJS, написать небольшое
клиентское приложение, работающее по типу простейшей CMS (content
management system).
Приложение, при старте загружает, по заранее известному пути, json файл с
описанием табов/закладок, которые необходио отрисовать в приложении. Описание таба состоит из идентификатора, заголовка, порядкового номера
закладки и пути к javascript файлу который в себе содержит requireJS модуль с
Backbone.View необходимым для отрисовки содержимого закладки.

tabs.json : [ {id: 'dummyTable', title: 'Dummy Table', order: 1, path: 'tabs/dummyTable.js'}, {id: 'dummyChart', title: 'Dummy Chart', order: 2, path: 'tabs/dummyChart.js'}, {id: 'dummyList', title: 'Dummy List', order: 0, path: 'tabs/dummyList.js'} ];

Общие требования:

При навигации между закладками, текущая закладка должна находить
отображение в url приложения.
Например 'localhost/dummyTable' или 'localhost/dummyChart'

По умолчанию должна открыться первая закладка.

Если в момент старта приложения, в url указана конкретная закладка
необходимо сразу ее открыть.

Файл модуль закладки должен быть подгружен только тогда когда
необходим
