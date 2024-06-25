// Визначаємо функції displayContent та createSubMenu у глобальному контексті
function displayContent(labNumber) {
    console.log("Функція displayContent викликається з номером роботи:", labNumber);

    // Очистити попередній вміст
    document.getElementById("info-display").innerHTML = "";
    document.getElementById("lab-content").innerHTML = "";

    // Змінна для збереження змісту лабораторної роботи
    let labContent = "";

    // Визначити зміст в залежності від номера лабораторної роботи
    // ########################################################################################################################
    if (labNumber === 1) {
        labContent = `
            <h3>Лабораторна робота № 1</h3>`;
        createSubMenu(1);
    }
        // ########################################################################################################################

    if (labNumber === 2) {
        labContent = `
            <h3>Лабораторна робота № 2</h3>
            
        `;
        createSubMenu(2);
    }

    if (labNumber === 3) {
        labContent = `
            <h3>Лабораторна робота № 3</h3>
            
        `;
        createSubMenu(3);
    }

    if (labNumber === 4) {
        labContent = `
            <h3>Лабораторна робота № 4</h3>
            
        `;
        createSubMenu(4);
    }

    if (labNumber === 5) {
        labContent = `
            <h3>Лабораторна робота № 5</h3>
            
        `;
        createSubMenu(5);
    }

    if (labNumber === 5.1) {
        labContent = `
            <h3>Лабораторна робота № 5.1</h3>
            
        `;
        createSubMenu(5.1);
    }

    if (labNumber === 6) {
        labContent = `
            <h3>Лабораторна робота № 6</h3>
            
        `;
        createSubMenu(6);
    }

    if (labNumber === 7) {
        labContent = `
            <h3>Лабораторна робота № 7</h3>
            <a href="lab7/index.html" target="_blanc">Завдання №1</a>
            <br>
            <a href="lab7/index2.html" target="_blanc">Завдання №2</a>
            
        `;
        createSubMenu(7);
    }

    if (labNumber === 8) {
        labContent = `
            <h3>Лабораторна робота № 8</h3>
            
        `;
        createSubMenu(8);
    }
    // Вивести зміст лабораторної роботи в відповідний блок
    document.getElementById("lab-content").innerHTML = labContent;

    // Після створення меню змісту налаштовуємо розміри кнопок
    adjustButtonSizes();
}

function createSubMenu(labNumber) {
    let menu = document.createElement("div");
    menu.className = "lab-menu";
    let infoDisplay = document.getElementById("info-display");
    infoDisplay.appendChild(menu);

    // Тут можна додати кнопки для меню змісту
    // ########################################################################################################################

    if (labNumber === 1) {

    let button1 = document.createElement("button");
    button1.textContent = "Опис предметного середовища";
    button1.onclick = function() {
        displaySubMenuContent("Опис предметного середовища");
    };
    menu.appendChild(button1);

    let button2 = document.createElement("button");
    button2.textContent = "Тема Мета Місце розташування ЛР №1";
    button2.onclick = function() {
        displaySubMenuContent("Тема Мета Місце розташування ЛР №1");
    };
    menu.appendChild(button2);

    let button3 = document.createElement("button");
    button3.textContent = "СТРУКТУРА ДОКУМЕНТУ";
    button3.onclick = function() {
        displaySubMenuContent("СТРУКТУРА ДОКУМЕНТУ");
    };
    menu.appendChild(button3);

    let button4 = document.createElement("button");
    button4.textContent = "HTML-код ТАБЛИЦЬ";
    button4.onclick = function() {
        displaySubMenuContent("HTML-код ТАБЛИЦЬ");
    };
    menu.appendChild(button4);

    let button5 = document.createElement("button");
    button5.textContent = "HTML-код ФОРМИ";
    button5.onclick = function() {
        displaySubMenuContent("HTML-код ФОРМИ");
    };
    menu.appendChild(button5);

    let button51 = document.createElement("button");
    button5.textContent = "HTML-код ФОРМИ";
    button5.onclick = function() {
        displaySubMenuContent("HTML-код ФОРМИ");
    };
    // menu.appendChild(button51);

    let button6 = document.createElement("button");
    button6.textContent = "HTML-код ЗОБРАЖЕННЯ";
    button6.onclick = function() {
        displaySubMenuContent("HTML-код ЗОБРАЖЕННЯ");
    };
    menu.appendChild(button6);

    let button7 = document.createElement("button");
    button7.textContent = "ВИСНОВКИ";
    button7.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ");
    };
    menu.appendChild(button7);
}
    // ########################################################################################################################

else if (labNumber === 2) {
    
    let button21 = document.createElement("button");
    button21.textContent = "Тема, мета ЛР №2. Місце розташування сайту, звіту";
    button21.onclick = function() {
        displaySubMenuContent("Тема, мета ЛР №2. Місце розташування сайту, звіту");
    };
    menu.appendChild(button21);

    let button22 = document.createElement("button");
    button22.textContent = "Способи підключення стилів";
    button22.onclick = function() {
        displaySubMenuContent("Способи підключення стилів");
    };
    menu.appendChild(button22);

    let button23 = document.createElement("button");
    button23.textContent = "СЕЛЕКТОРИ";
    button23.onclick = function() {
        displaySubMenuContent("СЕЛЕКТОРИ");
    };
    menu.appendChild(button23);

    let button24 = document.createElement("button");
    button24.textContent = "Селектори тегу";
    button24.onclick = function() {
        displaySubMenuContent("Селектори тегу");
    };
    menu.appendChild(button24);

    let button25 = document.createElement("button");
    button25.textContent = "Селектори класу";
    button25.onclick = function() {
        displaySubMenuContent("Селектори класу");
    };
    menu.appendChild(button25);

    let button26 = document.createElement("button");
    button26.textContent = "Селектори ідентифікаторів";
    button26.onclick = function() {
        displaySubMenuContent("Селектори ідентифікаторів");
    };
    menu.appendChild(button26);

    let button27 = document.createElement("button");
    button27.textContent = "Інші селектори";
    button27.onclick = function() {
        displaySubMenuContent("Інші селектори");
    };
    menu.appendChild(button27);

    let button28 = document.createElement("button");
    button28.textContent = "CSS: Шрифти. Текст. Таблиці. Фон. Контур. Списки. CSS просунутий";
    button28.onclick = function() {
        displaySubMenuContent("CSS: Шрифти. Текст. Таблиці. Фон. Контур. Списки. CSS просунутий");
    };
    menu.appendChild(button28);

    let button29 = document.createElement("button");
    button29.textContent = "ВИСНОВКИ до ЛР №2";
    button29.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ до ЛР №2");
    };
    menu.appendChild(button29);
}
    // ########################################################################################################################

else if (labNumber === 3) {
    
    let button301 = document.createElement("button");
    button301.textContent = "Тема, мета ЛР №3. Місце розташування сайту, звіту";
    button301.onclick = function() {
        displaySubMenuContent("Тема, мета ЛР №3 Місце розташування сайту, звіту");
    };
    menu.appendChild(button301);

    let button302 = document.createElement("button");
    button302.textContent = "ЗАВДАННЯ №1 Зовнішній вигляд макету. Код макету";
    button302.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №1 Зовнішній вигляд макету. Код макету");
    };
    menu.appendChild(button302);

    let button303 = document.createElement("button");
    button303.textContent = "ЗАВДАННЯ №2";
    button303.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №2");
    };
    menu.appendChild(button303);

    let button304 = document.createElement("button");
    button304.textContent = "Фіксована таблична верстка";
    button304.onclick = function() {
        displaySubMenuContent("Фіксована таблична верстка");
    };
    menu.appendChild(button304);

    let button305 = document.createElement("button");
    button305.textContent = "Гумова таблична верстка";
    button305.onclick = function() {
        displaySubMenuContent("Гумова таблична верстка");
    };
    menu.appendChild(button305);

    let button306 = document.createElement("button");
    button306.textContent = "Фіксована блокова верстка";
    button306.onclick = function() {
        displaySubMenuContent("Фіксована блокова верстка");
    };
    menu.appendChild(button306);

    let button307 = document.createElement("button");
    button307.textContent = "Гумова блокова верстка";
    button307.onclick = function() {
        displaySubMenuContent("Гумова блокова верстка");
    };
    menu.appendChild(button307);

    let button308 = document.createElement("button");
    button308.textContent = "ЗАВДАННЯ №3 FLEXBOX";
    button308.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №3 FLEXBOX");
    };
    menu.appendChild(button308);

    let button309 = document.createElement("button");
    button309.textContent = "Зовнішній вигляд сторінки";
    button309.onclick = function() {
        displaySubMenuContent("Зовнішній вигляд сторінки");
    };
    menu.appendChild(button309);

    let button310 = document.createElement("button");
    button310.textContent = "HTML-код";
    button310.onclick = function() {
        displaySubMenuContent("HTML-код");
    };
    menu.appendChild(button310);

    let button311 = document.createElement("button");
    button311.textContent = "CSS-код сторінки";
    button311.onclick = function() {
        displaySubMenuContent("CSS-код сторінки");
    };
    menu.appendChild(button311);

    let button312 = document.createElement("button");
    button312.textContent = "ВИСНОВКИ до ЛР №3";
    button312.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ до ЛР №3");
    };
    menu.appendChild(button312);
}
    // ########################################################################################################################

else if (labNumber === 4) {
    
    let button401 = document.createElement("button");
    button401.textContent = "Тема, мета ЛР №4. Місце розташування сайту, звіту";
    button401.onclick = function() {
        displaySubMenuContent("Тема, мета ЛР №4 Місце розташування сайту, звіту");
    };
    menu.appendChild(button401);

    let button402 = document.createElement("button");
    button402.textContent = "ЗАВДАННЯ №1 Визначення брейкпоінтів";
    button402.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №1 Визначення брейкпоінтів");
    };
    menu.appendChild(button402);

    let button403 = document.createElement("button");
    button403.textContent = "ЗАВДАННЯ №2 Виконання адаптивної верстки";
    button403.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №2 Виконання адаптивної верстки");
    };
    menu.appendChild(button403);

    let button404 = document.createElement("button");
    button404.textContent = "ЗАВДАННЯ №3 Пояснення створених версій";
    button404.onclick = function() {
        displaySubMenuContent("ЗАВДАННЯ №3 Пояснення створених версій");
    };
    menu.appendChild(button404);

    let button406 = document.createElement("button");
    button406.textContent = "ВИСНОВКИ до ЛР №4";
    button406.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ до ЛР №4");
    };
    menu.appendChild(button406);
}
    // ########################################################################################################################

else if (labNumber === 5) {
    
    let button501 = document.createElement("button");
    button501.textContent = "Постановка задачі ЛР № 5";
    button501.onclick = function() {
        displaySubMenuContent("Постановка задачі ЛР № 5");
    };
    menu.appendChild(button501);

    let button502 = document.createElement("button");
    button502.textContent = "Задача 1 лаб 5";
    button502.onclick = function() {
        displaySubMenuContent("Задача 1 лаб 5");
    };
    menu.appendChild(button502);

    let button503 = document.createElement("button");
    button503.textContent = "Код до Завдання 1";
    button503.onclick = function() {
        displaySubMenuContent("Код до Завдання 1");
    };
    menu.appendChild(button503);

    let button504 = document.createElement("button");
    button504.textContent = "Задача 2 лаб 5";
    button504.onclick = function() {
        displaySubMenuContent("Задача 2 лаб 5");
    };
    menu.appendChild(button504);

    let button505 = document.createElement("button");
    button505.textContent = "Код до Завдання 2";
    button505.onclick = function() {
        displaySubMenuContent("Код до Завдання 2");
    };
    menu.appendChild(button505);

    let button506 = document.createElement("button");
    button506.textContent = "Застосування на сайті";
    button506.onclick = function() {
        displaySubMenuContent("Застосування на сайті");
    };
    menu.appendChild(button506);

    // let button507 = document.createElement("button");
    // button507.textContent = "Виконання завдання за масивами (вар.6 таб.1)";
    // button507.onclick = function() {
    //     displaySubMenuContent("Виконання завдання за масивами (вар.6 таб.1)");
    // };
    // menu.appendChild(button507);

    // let button508 = document.createElement("button");
    // button508.textContent = "Виконання завдання за вар.6 таб.2";
    // button508.onclick = function() {
    //     displaySubMenuContent("Виконання завдання за вар.6 таб.2");
    // };
    // menu.appendChild(button508);

    // let button509 = document.createElement("button");
    // button509.textContent = "Виконання завдання за пунктом 7";
    // button509.onclick = function() {
    //     displaySubMenuContent("Виконання завдання за пунктом 7");
    // };
    // menu.appendChild(button509);
   
    let button510 = document.createElement("button");
    button510.textContent = "ВИСНОВКИ за ЛР №5";
    button510.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ за ЛР №5");
    };
    menu.appendChild(button510);
}
    // ########################################################################################################################

else if (labNumber === 6) {
    
    let button511 = document.createElement("button");
    button511.textContent = "Постановка задачі ЛР № 6";
    button511.onclick = function() {
        displaySubMenuContent("Постановка задачі ЛР № 6");
    };
    menu.appendChild(button511);

    let button512 = document.createElement("button");
    button512.textContent = "Завдання № 2";
    button512.onclick = function() {
        displaySubMenuContent("Завдання № 2");
    };
    menu.appendChild(button512);

    let button513 = document.createElement("button");
    button513.textContent = "Завдання № 4";
    button513.onclick = function() {
        displaySubMenuContent("Завдання № 4");
    };
    menu.appendChild(button513);

    let button514 = document.createElement("button");
    button514.textContent = "Завдання № 6";
    button514.onclick = function() {
        displaySubMenuContent("Завдання № 6");
    };
    menu.appendChild(button514);

    let button515 = document.createElement("button");
    button515.textContent = "Завдання № 8";
    button515.onclick = function() {
        displaySubMenuContent("Завдання № 8");
    };
    menu.appendChild(button515);

    let button516 = document.createElement("button");
    button516.textContent = "Завдання № 9";
    button516.onclick = function() {
        displaySubMenuContent("Завдання № 9");
    };
    menu.appendChild(button516);

    let button517 = document.createElement("button");
    button517.textContent = "Завдання № 10";
    button517.onclick = function() {
        displaySubMenuContent("Завдання № 10");
    };
    menu.appendChild(button517);

    let button518 = document.createElement("button");
    button518.textContent = "ВИСНОВКИ за ЛР №6";
    button518.onclick = function() {
        displaySubMenuContent("ВИСНОВКИ за ЛР №6");
    };
    menu.appendChild(button518);

    }
    // ########################################################################################################################

// else if (labNumber === 6) {
    
//     window.location.href = 'lr6.html';     
    
// }

}

// Викликаємо функцію після завантаження сторінки
window.onload = function() {
    // Викликаємо функцію displayContent з номером 1 при завантаженні сторінки
    displayContent(1);
};

function adjustButtonSizes() {
    // Отримання всіх кнопок
    const buttons = document.querySelectorAll(".info-display button");

    // Знаходження максимальної ширини кнопки
    let maxWidth = 0;
    buttons.forEach(button => {
        const buttonWidth = button.offsetWidth;
        if (buttonWidth > maxWidth) {
            maxWidth = buttonWidth;
        }
    });

    // Застосування максимальної ширини до всіх кнопок
    buttons.forEach(button => {
        button.style.width = `${maxWidth}px`;
    });
}
    // ########################################################################################################################

function displaySubMenuContent(buttonText) {
    let contentHTML = ""; // Рядок, в якому буде зберігатися HTML-структура для вмісту

    // Відповідно до тексту кнопки створюємо відповідний вміст

    switch (buttonText) {
        case "Опис предметного середовища":
                contentHTML="<b>Функціонал:</b> інформація про препарати, їх призначення, дозування, побічні ефекти, пошук за назвою або категорією. </br> <b>Бізнес-логіка:</b> можливість додавання, редагування та видалення препаратів адміністраторами, управління категоріями препаратів."
            // contentHTML = `
            //         <h2>Опис предметного середовища</h2>
            //         <ol>
            //             <li>Створення інтернет-магазину для здійснення господарської діяльності з продажу товарів з категорії жіночого одягу та задоволення попиту відповідної категорії споживачів.</li>
            //             <li>Узагальнений опис функціоналу:</li>
            //             <ol type="a">
            //                 <li>Реєстрація та вхід в обліковий запис</li>
            //                 <li>Навігація та пошук</li>
            //                 <li>Каталог товарів</li>
            //                 <li>Сторінки товарів (сторінка – товар)</li>
            //                 <li>Кошик покупця</li>
            //                 <li>Оформлення замовлення</li>
            //                 <li>Адміністративний розділ</li>
            //                 <li>Секція новин (гостьова)</li>
            //                 <li>Контактна інформація (зворотній зв’язок)</li>
            //             </ol>
            //         </ol>
            //         <h3>Функціонал адміністратора:</h3>
            //         <ol>
            //             <li>Управління товарами:
            //                 <ul>
            //                     <li>Додавання, видалення та редагування товарів.</li>
            //                     <li>Додавання зображень, описів та цін до товарів.</li>
            //                     <li>Категоризація товарів для зручного пошуку.</li>
            //                 </ul>
            //             </li>
            //             <li>Управління замовленнями:
            //                 <ul>
            //                     <li>Перегляд та відстеження статусів замовлень.</li>
            //                     <li>Зміна статусів замовлень ("нове", "в обробці", "відправлене", "доставлене").</li>
            //                 </ul>
            //             </li>
            //             <li>Управління користувачами:
            //                 <ul>
            //                     <li>Реєстрація нових користувачів.</li>
            //                     <li>Перегляд та редагування інформації про користувачів.</li>
            //                     <li>Видалення користувачів або блокування їхніх облікових записів.</li>
            //                 </ul>
            //             </li>
            //             <li>Звіти та аналітика:
            //                 <ul>
            //                     <li>Перегляд статистики продажів та замовлень.</li>
            //                     <li>Генерація звітів за потрібними періодами часу або категоріями товарів.</li>
            //                 </ul>
            //             </li>
            //         </ol>
                    
            //         <h3>Функціонал відвідувача:</h3>
            //         <ol>
            //             <li>Перегляд товарів:
            //                 <ul>
            //                     <li>Перегляд каталогу товарів із зображеннями, описами та цінами.</li>
            //                     <li>Фільтрація та сортування товарів за різними критеріями (ціна, розмір, категорія).</li>
            //                 </ul>
            //             </li>
            //             <li>Пошук товарів:
            //                 <ul>
            //                     <li>Пошук товарів за категорією або розміром.</li>
            //                 </ul>
            //             </li>
            //             <li>Додавання товарів до кошика:
            //                 <ul>
            //                     <li>Обрання товару; додавання обраних товарів до кошика.</li>
            //                 </ul>
            //             </li>
            //             <li>Оформлення замовлення:
            //                 <ul>
            //                     <li>Підтвердження оплати обраних товарів за кошиком.</li>
            //                     <li>Заповнення форми з контактною інформацією та адресою для оформлення замовлення.</li>
            //                     <li>Вибір способу доставки (Укрпошта, Нова пошта, самовивіз).</li>
            //                 </ul>
            //             </li>
            //             <li>Особистий кабінет:
            //                 <ul>
            //                     <li>Реєстрація нового користувача; вхід в особистий кабінет.</li>
            //                     <li>Перегляд статусу поточних замовлень; перегляд історії замовлень.</li>
            //                     <li>Змінення особистої інформації (реєстраційних даних).</li>
            //                 </ul>
            //             </li>
            //         </ol>             
            // `;
            break;
        // ########################################################################################################################

        case "Тема Мета Місце розташування ЛР №1":
            contentHTML = `
                <h3>Тема</h3>
                <p>СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ.РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ в HTML-ДОКУМЕНТІ</p>

                <h3>Мета </h3>
                <p>Придбати практичні навички роботи  з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.</p>

                <h3>Місце розташування ЛР №1</h3>
                <p>Розміщено на GitHub</p>
                <p><a href="https://github.com/FedirDobrovolskiy/s6_web_zvit" target="_blank">Звіт.</a> <a href="" target="_blank">Сайт звіту.</a></p>
                <p><a href="https://github.com/FedirDobrovolskiy/s6_web_app" target="_blank">Проект.</a> <a href="" target="_blank">Сайт проекту.</a></p>
                <p><a href="https://github.com/FedirDobrovolskiy/s6_web_resume" target="_blank">Резюме.</a> <a href="https://fedirdobrovolskiy.github.io/s6_web_resume/ " target="_blank">Сайт резюме.</a></p>

            `;
            break;
        case "СТРУКТУРА ДОКУМЕНТУ":
            contentHTML = `
                <h3>СТРУКТУРА</h3>
                <p>HTML-код ТАБЛИЦЬ.</p>
                <p>HTML-код ФОРМИ.</p>
                <p>HTML-код ЗОБРАЖЕННЯ.</p>

            `;
            break;

        case "HTML-код ТАБЛИЦЬ":
            contentHTML = `
            <pre>
&lt;table&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;Назва препарату&lt;/th&gt;
            &lt;th&gt;Призначення&lt;/th&gt;
            &lt;th&gt;Дозування&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;Парацетамол&lt;/td&gt;
            &lt;td&gt;Знеболювальне, жарознижувальне&lt;/td&gt;
            &lt;td&gt;500 мг 3 рази на день&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;Ібупрофен&lt;/td&gt;
            &lt;td&gt;Протизапальне, знеболювальне&lt;/td&gt;
            &lt;td&gt;200 мг 4 рази на день&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;
            </pre>
        `;
        
            break;
            
        case "HTML-код ФОРМИ":
            contentHTML = `
            <pre>
&lt;form id="drug-form"&gt;
    &lt;label for="drug-name"&gt;Назва препарату:&lt;/label&gt;
    &lt;input type="text" id="drug-name" name="drug-name" required&gt;
    
    &lt;label for="drug-purpose"&gt;Призначення:&lt;/label&gt;
    &lt;input type="text" id="drug-purpose" name="drug-purpose" required&gt;
    
    &lt;label for="drug-dosage"&gt;Дозування:&lt;/label&gt;
    &lt;input type="text" id="drug-dosage" name="drug-dosage" required&gt;
    
    &lt;button type="submit"&gt;Додати препарат&lt;/button&gt;
&lt;/form&gt;
            </pre>
        `;
        
            break;

            case "HTML-код ЗОБРАЖЕННЯ":
                contentHTML = `
                    <pre>&lt;img src="img/med1.png" alt="Місце для зображення препарату"&gt;
                    </pre>
                `;
                break;
            
            break;

        case "ВИСНОВКИ":
            contentHTML = `
                <h3>ВИСНОВКИ</h3>
                <p>В ході виконання лабораторної роботи була відпрацьована реалізація завдань  з HTML-документом, таблицями, зображеннями, посиланнями, списками, формами.</p>
                <p>Набуті знання та навички закріплено в шляхом створення шаблону звітного HTML-документу для відображення результатів роботи всіх лабораторних робіт.</p>
            `;
            break;
        // ########################################################################################################################

        case "Тема, мета ЛР №2. Місце розташування сайту, звіту":
            contentHTML = `
                <h3>Тема, мета ЛР №2. Місце розташування сайту, звіту</h3>
                <p>Тема: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.</p>

                <p>Мета: придбати практичні навички роботи  з селекторами, ідентифікаторами, списками,  різноманітними властивостями кольору і фону,  
                зовнішними та внутрішними  відступами,  плаваючими елементами, оформленням текстових елементів.</p>

                <h3>Місце розташування ЛР №2</h3>
                <p>Розміщено на GitHub</p>
                <p><a href="https://github.com/FedirDobrovolskiy/s6_web_zvit" target="_blank">Звіт.</a> <a href="" target="_blank">Сайт звіту.</a></p>
                <p><a href="https://github.com/FedirDobrovolskiy/s6_web_app" target="_blank">Проект.</a> <a href="" target="_blank">Сайт проекту.</a></p>
                <p><a href="https://github.com/FedirDobrovolskiy/s6_web_resume" target="_blank">Резюме.</a> <a href="https://fedirdobrovolskiy.github.io/s6_web_resume/ " target="_blank">Сайт резюме.</a></p>
                
            `;
            break;

        case "Способи підключення стилів":
            contentHTML = `
                <h3>Способи підключення стилів</h3>
                <p>Вбудований CSS: Стилі можна включати безпосередньо в HTML-документ за допомогою тегу <style>. 
                Вбудований CSS також можна використовувати в тегах за допомогою атрибута style.  </p>

                <p>Зовнішній CSS: Стилі можна розмістити у зовнішньому файлі CSS і підключити їх до HTML-документу за допомогою тегу <link>.</p>

                <p>Використання JavaScript для динамічного додавання стилів: Ви можете використовувати JavaScript для створення або зміни стилів динамічно. </p>
                              
            `;
            break;
        
        case "СЕЛЕКТОРИ":
            contentHTML = `
                <h3>СЕЛЕКТОРИ</h3>
                <p>Селектори тегу</p>             
                <p>Селектори класу</p>
                <p>Селектори ідентифікаторів</p>
                <p>Селектори сусідні</p>
                <p>Селектори атрибута </p>
                <p>Селектори універсальні</p>
                <p>Селектори дочірні</p>                       
            `;
            break;

            case "Селектори тегу":
                contentHTML = `
<pre>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #4CAF50;
    color: white;
    padding: 15px 0;
    text-align: center;
}

header nav a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
}
</pre>
                `;
                
                break;
            case "Селектори класу":
                contentHTML = `
<pre>
.images p {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
    margin: 10px 0;
}
</pre>
                `;
                break;

            case "Селектори ідентифікаторів":
                contentHTML = `
<pre>
#medicament {
    width: 5%;
}
</pre>
                `;
                break;

            case "Інші селектори":
            contentHTML = `
                <h3>Інші селектори</h3>

                <p>Селектори сусідні</p>
<pre>
h1, h2 {
    font-family: 'Georgia', serif;
    color: #4CAF50;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}
</pre>

                <p>Селектори атрибута </p>
<pre>
img[alt="Місце для зображення препарату"] {
    border: 1px solid;
}
</pre>

                <p>Селектори універсальні</p>
<pre>
* {
    box-sizing: border-box;
}
</pre>

                <p>Селектори дочірні</p>
<pre>
nav > ol > li {
    display: inline-block;
    margin-right: 20px;
}
</pre>
                              
                `;
                break;

            case "CSS: Шрифти. Текст. Таблиці. Фон. Контур. Списки. CSS просунутий":
            contentHTML = `
<pre>
/* Загальні стилі для шрифтів */
body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f8ff; /* Фон */
    color: #333; /* Колір тексту */
    margin: 0;
    padding: 0;
}

/* Стиль для заголовків */
h1, h2 {
    font-family: 'Georgia', serif;
    color: #4CAF50;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* Просунутий CSS (тінь для тексту) */
}

/* Стиль для контурів */
header, footer, .content {
    border: 2px solid #4CAF50; /* Контури */
    padding: 10px;
    margin: 10px;
    border-radius: 8px; /* Просунутий CSS (радіус обвідки) */
}

/* Фон для контенту */
.content {
    background-color: #e8f5e9;
}

/* Стилі для таблиці */
table {
    width: 100%;
    border-collapse: collapse; /* CSS-властивості для таблиць */
    margin-bottom: 20px;
}

table, th, td {
    border: 1px solid #ddd;
    padding: 8px;
}

th {
    background-color: #4CAF50;
    color: white;
    text-align: left;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

/* Стилі для багаторівневих списків */
ul, ol {
    margin: 20px;
    padding: 0;
}

ul li {
    list-style-type: square; /* Маркірований список */
    margin-left: 20px;
}

ol li {
    margin-left: 20px;
}

ul ul, ol ol {
    margin-left: 20px;
}

ul ul li, ol ol li {
    list-style-type: circle; /* Вкладений список */
}

/* Просунутий CSS - трансформації */
button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    text-transform: uppercase; /* Перетворення тексту */
    transition: background-color 0.3s ease; /* Плавний перехід */
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
</pre>`;
                break;

            case "ВИСНОВКИ до ЛР №2":
            contentHTML = `
                <h3>Висновки</h3>

                <p>В ході виконання лабораторної роботи набуто практичних навичок роботи  з селекторами, 
                ідентифікаторами, списками,  різноманітними властивостями 
                кольору і фону,  зовнішними та внутрішними  відступами,  
                плаваючими елементами, оформленням текстових елементів. Набуті навички реалізовано в загальному проекті, посилання на який наведено вище. </p>
                
                `;
                break;
        // ########################################################################################################################

        case "Тема, мета ЛР №3 Місце розташування сайту, звіту":
        contentHTML = `
            <h3>Тема, мета ЛР №3. Місце розташування сайту, звіту</h3>
            <p>Тема: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА.  ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.</p>

            <p>Мета:</p>
            <p>⎯	придбати практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок</p>
            <p>⎯	придбати практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX</p>   
                
            <h3>Місце розташування ЛР №3</h3>
            <p>Розміщено на GitHub</p>
                <p><a href="https://github.com/FedirDobrovolskiy/s6_web_zvit" target="_blank">Звіт.</a> <a href="" target="_blank">Сайт звіту.</a></p>
                <p><a href="https://github.com/FedirDobrovolskiy/s6_web_app" target="_blank">Проект.</a> <a href="" target="_blank">Сайт проекту.</a></p>
                <p><a href="https://github.com/FedirDobrovolskiy/s6_web_resume" target="_blank">Резюме.</a> <a href="https://fedirdobrovolskiy.github.io/s6_web_resume/ " target="_blank">Сайт резюме.</a></p>
                
            `;
            break;

        case "ЗАВДАННЯ №1 Зовнішній вигляд макету. Код макету":
            contentHTML = `
                <h3>ЗАВДАННЯ №1 Зовнішній вигляд макету. Код макету</h3>
                
                <p>Функціональний або інформаційний веб-дизайн</p>                   
                <p>Основні риси цього типу дизайну включають центрованість на інформації: основна мета - надати користувачам легкий доступ до інформації з мінімальними перешкодами, простоту і чистоту макетів - вони зазвичай мають просту структуру без надмірного декору або складних ефектів, функціональність - важливість функціональності і зручності використання для користувача, чітку навігацію - ефективну організацію інформації з допомогою меню, посилань і відповідних елементів управління, а також практичність - зорієнтованість на реалізацію мети сайту, наприклад, надання інформації про медичні препарати.</p>
                <p>Зовнішній вигляд макету:</p>
                <img src="LR3_12.png" alt="LR3_12" width="50%"> 
                <p>Код макету:</p>
                <img src="LR3_13.png" alt="LR3_13" width="50%">
                <img src="LR3_15.png" alt="LR3_15" width="50%">  
                 
                              
            `;
            break;
        
        case "ЗАВДАННЯ №2":
            contentHTML = `
                <h3>ЗАВДАННЯ №2</h3>

                <p>Фіксовані і гумові табличні та блокові верстки <b>варіант 7</b></p>              
                                              
            `;
            break;

            case "Фіксована таблична верстка":
                contentHTML = `
                    <h3>Фіксована таблична верстка</h3>    
                    
                    <img src="LR3_22.png" alt="LR3_21">                   
                    <img src="LR3_221.png" alt="LR3_21">                   

                                  
                `;
                break;
            case "Гумова таблична верстка":
            contentHTML = `
                <h3>Гумова таблична верстка</h3>
                <img src="LR3_21.png" alt="LR3_22">                   
                                              
                `;
                break;

            case "Фіксована блокова верстка":
            contentHTML = `
                <h3>Фіксована блокова верстка</h3>
                <img src="LR3_23.png" alt="LR3_23">                   
                                              
                `;
                break;

            case "Гумова блокова верстка":
            contentHTML = `
                <h3>Гумова блокова верстка</h3>
                <img src="LR3_24.png" alt="LR3_24">                   

                `;
                break;

            case "ЗАВДАННЯ №3 FLEXBOX":
            contentHTML = `
                <h3>ЗАВДАННЯ №3 FLEXBOX</h3>

                <p>Flexbox (Flexible Box Layout) - це технологія CSS, яка забезпечує багатофункціональність для 
                розташування елементів в контейнері. За допомогою Flexbox ви можете легко створювати гнучкі та 
                респонсивні макети, контролювати порядок, вирівнювання та розміри елементів на веб-сторінці. </p>                             
                <p>Основні концепції Flexbox включають у себе: </p>
                
                <p>Гнучкі контейнери (Flex Containers): Елементи, які мають властивість display: 
                flex або display: inline-flex, стають гнучкими контейнерами, які можна організовувати 
                за допомогою властивостей Flexbox. </p>
                
                <p>Гнучкі елементи (Flex Items): Дочірні елементи гнучкого контейнера, які вирівнюються та розміщаються за допомогою Flexbox.</p>
                
                <p>Основні (main) та бічні (cross) вісі: Flexbox працює на основі вісей, де головна вісь 
                вказує напрямок розташування елементів (зазвичай горизонтально), а бічна вісь використовується 
                для вирівнювання та розташування елементів у поперечному напрямку (зазвичай вертикально).</p>
                
                <p>Гнучкі властивості (Flex Properties): Flexbox має низку властивостей, 
                таких як justify-content, align-items, flex-direction, які використовуються 
                для керування розміщенням та вирівнюванням елементів в гнучкому контейнері.</p>
                
                <p>Flexbox дозволяє створювати складні макети і вирішувати багато задач з розміщенням елементів 
                на веб-сторінці з меншим кодом та більшою гнучкістю. Він є потужним інструментом для розробників 
                веб-сайтів і допомагає забезпечити ефективність та консистентність у створенні різноманітних макетів.</p>
                
                `;
                break;

            case "Зовнішній вигляд сторінки":
            contentHTML = `
                <h3>Зовнішній вигляд сторінки</h3>

                <img src="LR3_321.png" alt="LR3_321">                   

                `;
                break;

            case "HTML-код":
            contentHTML = `
                <h3>HTML-код</h3>

                <img src="LR3_322.png" alt="LR3_321">                   
                  
                
                `;
                break;

            case "CSS-код сторінки":
            contentHTML = `
                <h3>CSS-код сторінки</h3>

                <img src="LR3_331.png" alt="LR3_331">                   
                  
                
                `;
                break;

            case "ВИСНОВКИ до ЛР №3":
            contentHTML = `
                <h3>ВИСНОВКИ до ЛР №3</h3>

                <p>В ході виконання лабораторної роботи набуто практичних навичок роботи  
                верстки сторінок засобами CSS, верстки на основі плаваючих елементів, 
                з’ясувати переваги та недоліки типів макетів веб-сторінок. Визначено доцільність 
                використання переважно блокової верстки, що дозволяє використовувати більше 
                інструментів аніж за табличною варіацією, спрощує процедури розробки сайту, 
                підвищує рівень користувацької зручності та зручності обслуговування. При цьому, не слід
                відкидати допустимістьвикористання табличних технологій за окремими елементами (в разі потреби).</p>
                
                `;
                break;

                     // ########################################################################################################################
   
            case "Тема, мета ЛР №4 Місце розташування сайту, звіту":
            contentHTML = `
                <h3>Тема, мета ЛР №4. Місце розташування сайту, звіту</h3>
                <p>Тема: АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST.</p>

                <p>Мета: Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції.Метатег viewport. Інструменти розробника. Стратегія Mobile First.</p>

                <h3>Місце розташування ЛР №4</h3>
                <p>Розміщено на GitHub</p>
                <p><a href="https://github.com/FedirDobrovolskiy/s6_web_zvit" target="_blank">Звіт.</a> <a href="" target="_blank">Сайт звіту.</a></p>
                <p><a href="https://github.com/FedirDobrovolskiy/s6_web_app" target="_blank">Проект.</a> <a href="" target="_blank">Сайт проекту.</a></p>
                <p><a href="https://github.com/FedirDobrovolskiy/s6_web_resume" target="_blank">Резюме.</a> <a href="https://fedirdobrovolskiy.github.io/s6_web_resume/ " target="_blank">Сайт резюме.</a></p>
                        
                `;
                break;
           
            case "ЗАВДАННЯ №1 Визначення брейкпоінтів":
            contentHTML = `
                <h3>ЗАВДАННЯ №1 Визначення брейкпоінтів</h3>
        
<p>Брейкпоінти у веб-дизайні визначають різні розміри екранів, на яких змінюється зовнішній вигляд і розташування елементів веб-сайту, щоб забезпечити найкраще відображення та зручність користування на різних пристроях, таких як комп'ютери, планшети та смартфони. Головна мета брейкпоінтів - забезпечити адаптивний дизайн, який гарантує оптимальний вигляд і функціональність сайту на будь-якому розмірі екрана. Використання брейкпоінтів дозволяє розробникам створювати веб-сайти, що підлаштовуються під різні розміри екранів без потреби створення окремих версій для кожного пристрою. Наприклад, розташування та стилізація елементів веб-сайту може бути оптимізована для широких екранів комп'ютерів, а при зменшенні розміру екрана компоновка, розташування та стилізація можуть бути змінені для планшетів та смартфонів, щоб забезпечити зручність користувачів.</p>
<p>Визначені брейкпоінти: до 500 пікселів, від 500 до 1000 пікселів, більше 1000 пікселів.</p>
                        
                `;
                break;
        
                        
            case "ЗАВДАННЯ №2 Виконання адаптивної верстки":
            contentHTML = `
                <h3>ЗАВДАННЯ №2 Виконання адаптивної верстки</h3>
                
                <p>Результати виконання адаптивної верстки:</p>

                <br>
                <p>1) Десктопна версія (ширина від 1001 рх)</p>
                <img src="lr4_11.jpg" alt="lr4_11">   
                <br>
                
                <p>2) Планшетна версія (ширина від 501 до 1000 рх)</p>
                <img src="lr4_12.jpg" alt="lr4_12">

                
                <br>
                <p>3) Версія під мобільний телефон (ширина до 500 рх)</p>
                <img src="lr4_14.jpg" alt="lr4_14">   
                <br>

                <br>
                <p>Фрагмент тексту файлу стилів - медіазапити:</p>
                <pre>body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #4CAF50;
    color: white;
    padding: 15px 0;
    text-align: center;
}

header nav a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
}

main {
    padding: 20px;
}

h1 {
    margin: 0;
}

h2 {
    color: #4CAF50;
}

.images p {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
    margin: 10px 0;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
}

table, th, td {
    border: 1px solid #ddd;
}

th, td {
    padding: 10px;
    text-align: left;
}

ul, ol {
    margin: 20px 0;
}

form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
}

form label {
    margin: 10px 0 5px;
}

form input {
    padding: 5px;
    margin-bottom: 10px;
}

form button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

form button:hover {
    background-color: #45a049;
}

footer {
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    width: 100%;
    bottom: 0;
}

#medicament {
    width: 5%;
}

/* Адаптивна верстка для екранів шириною до 500px */
@media (max-width: 500px) {
    header nav {
        display: flex;
        flex-direction: column;
    }
    
    header nav a {
        margin: 5px 0;
    }
    
    table, th, td {
        font-size: 12px;
        padding: 5px;
    }
    
    form {
        width: 100%;
    }
    
    form input {
        width: 100%;
    }
    
    footer {
        font-size: 12px;
    }
}

/* Адаптивна верстка для екранів шириною до 1000px */
@media (max-width: 1000px) {
    main {
        padding: 10px;
    }
    
    table, th, td {
        font-size: 14px;
        padding: 8px;
    }
    
    form {
        width: 80%;
    }
    
    form input {
        width: 100%;
    }
}

/* Адаптивна верстка для екранів шириною більше 1000px */
@media (min-width: 1001px) {
    main {
        padding: 40px;
    }
    
    table, th, td {
        font-size: 16px;
        padding: 10px;
    }
    
    form {
        width: 60%;
    }
    
    form input {
        width: 100%;
    }
}
</pre>  
                <br>


    
                                
                `;
                break;
                        
                        
            case "ЗАВДАННЯ №3 Пояснення створених версій":
            contentHTML = `
                <h3>ЗАВДАННЯ №3 Пояснення створених версій</h3>
                
                <p>Отримані версії сайту відображають адаптивність та оптимізацію для різних пристроїв.</p> 

Після додавання медіа-запитів сайт тепер буде адаптивно змінювати свій вигляд залежно від ширини екрану користувача. Ось як він буде реагувати на різні ширини:

Екрани шириною до 500px
Меню навігації: Елементи навігації (посилання) будуть відображатися вертикально з меншими відступами між ними, щоб краще поміщатися на вузькому екрані.
Таблиця: Шрифт і відступи в таблиці зменшаться для зручності перегляду на маленьких екранах.
Форма: Форма буде займати 100% ширини контейнера, забезпечуючи зручність введення даних.
Футер: Зменшиться розмір шрифта у футері для економії місця.
Екрани шириною до 1000px
Головний вміст: Зменшаться відступи головного вмісту (main) для забезпечення більше простору на екрані.
Таблиця: Шрифт і відступи в таблиці зменшаться, але будуть більшими ніж на дуже маленьких екранах.
Форма: Форма буде займати 80% ширини контейнера для зручності введення даних.
Екрани шириною більше 1000px
Головний вміст: Збільшаться відступи головного вмісту (main) для кращого вигляду на великому екрані.
Таблиця: Шрифт і відступи в таблиці будуть більшими, забезпечуючи чітке і приємне відображення даних.
Форма: Форма буде займати 60% ширини контейнера для зручного введення даних і збереження гарного вигляду на великому екрані.              
                `;
                break;
                
                                

                    
            case "ВИСНОВКИ до ЛР №4":
            contentHTML = `
                <h3>ВИСНОВКИ до ЛР №4</h3>
                        
Під час виконання лабораторної роботи було отримано практичні навички з використання адаптивної верстки за допомогою медіа-запитів. Також було проведено порівняння з альтернативними методами, що не передбачають використання медіа-запитів.                      
                `;
                break;
                        
                 
            case "Постановка задачі ЛР № 5":
            contentHTML = `
                <h3>Постановка задачі лабораторної роботи № 5 (Тема, мета ЛР №5).</h3>
                <h3> Варіант 7</h3>
                <p>ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ. 
                ВИКОРИСТАННЯ МАСИВІВ У JS-СЦЕНАРІЯХ. РЕАЛІЗАЦІЯ ПРОГРАМ ЗАСОВАМИ МОВИ JAVASCRIPT</p>
        
                <p>Мета: Придбати практичні навички роботи з масивами у js-сценаріях. 
                Реалізація програм засобами мови JAVASCRIPT</p>
        
                <h3>Місце розташування ЛР №5</h3>
                <p>Розміщено на GitHub</p>
                <p><a href="https://github.com/FedirDobrovolskiy/s6_web_zvit" target="_blank">Звіт.</a> <a href="" target="_blank">Сайт звіту.</a></p>
                <p><a href="https://github.com/FedirDobrovolskiy/s6_web_app" target="_blank">Проект.</a> <a href="" target="_blank">Сайт проекту.</a></p>
                <p><a href="https://github.com/FedirDobrovolskiy/s6_web_resume" target="_blank">Резюме.</a> <a href="https://fedirdobrovolskiy.github.io/s6_web_resume/ " target="_blank">Сайт резюме.</a></p>
                <p><a href="https://github.com/FedirDobrovolskiy/s6_web_zvit" target="_blank">Виконання завдання 1.</a> <a href="lab5/index.html" target="_blank">Сайт виконання завдання 1.</a></p>
                <p><a href="https://github.com/FedirDobrovolskiy/s6_web_zvit" target="_blank">Виконання завдання 2.</a> <a href="lab5/index2.html" target="_blank">Сайт виконання завдання 2.</a></p>
               
                `;
                break;
                   
            case "Задача 1 лаб 5":
            contentHTML = `
            <img src="lr51.jpg" alt="lr5"> 
                `;
                break;
                                          
            case "Код до Завдання 1":
            contentHTML = `
            <img src="lr52.jpg" alt="lr5">                         
                `;
                break;
                                
                                
            case "Задача 2 лаб 5":
            contentHTML = `
            <img src="lr53.jpg" alt="lr5"> 
                `;
                break;
                        
                                        
            case "Код до Завдання 2":
            contentHTML = `
            <img src="lr54.jpg" alt="lr5"> 

                `;
                break;

            case "Застосування на сайті":
            contentHTML = `
            <img src="lr55.jpg" alt="lr5">                       
                `;
                break;

                    
            case "ВИСНОВКИ за ЛР №5":
            contentHTML = `
                <h3>ВИСНОВКИ до ЛР №5</h3>
                                
                <p>В ході виконання лабораторної роботи набуто практичних навичок роботи з 
                масивами у js-сценаріях.  Виконано завдання з реалізаціъ програм засовами мови JAVASCRIPT.
                Відпрацьовано отримані навички на власному проекті.</p>
                                                
                `;
                break;

            case "Постановка задачі ЛР № 6":
            contentHTML = `
                <h3>Постановка задачі ЛР № 6</h3>
                                                                        
                <p>Тема: КЛАСИ. ОБ'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). ПОДІЇ. ОБ'ЄКТ ПОДІЇ. ДЕЛЕГУВАННЯ ПОДІЙ. THROTTLE. МОДУЛЬНОСТЬ КОДУ</p>
        
                <p>Мета: придбати практичні навички роботи з об'єктами. Методи об'єкта. Callback. <br>
                Стрілочні функції. Стрілочні функції як колбеки. Реалізація програм засобами мови JAVASCRIPT</p>
        
                <h3>Місце розташування ЛР №6</h3>
                <p>Розміщено на GitHub</p>
                <p><a href="https://github.com/FedirDobrovolskiy/s6_web_zvit" target="_blank">Звіт.</a> <a href="" target="_blank">Сайт звіту.</a></p>
                <p><a href="https://github.com/FedirDobrovolskiy/s6_web_app" target="_blank">Проект.</a> <a href="" target="_blank">Сайт проекту.</a></p>
                <p><a href="https://github.com/FedirDobrovolskiy/s6_web_resume" target="_blank">Резюме.</a> <a href="https://fedirdobrovolskiy.github.io/s6_web_resume/ " target="_blank">Сайт резюме.</a></p>
                                                                                                
                `;
                break;


            case "Завдання № 2":
            contentHTML = `
                <h3>Текст завдання № 2</h3>
                                                                
                <p>У звітному HTML-документі створити html-розміту, яка складається з наступних елементів : текст, кнопка, два інпута (поля введення ).</p>
                <p>Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
У звітному HTML-документі  відобразити скрін програмного коду. </p>
                
    <div class="container">
        <h1>Swap Inputs</h1>
        <input type="text" id="input1" placeholder="Input 1">
        <input type="text" id="input2" placeholder="Input 2">
        <br>
        <button onclick="swapInputs()">SWAP ME</button>
    </div>






                <img src="l62.png" alt=""> 
                                                            
                                                                                
                `;
                break;     
                                
            case "Завдання № 4":
            contentHTML = `
                <h3>Текст завдання № 4</h3>
                                                                        
                <p>У звітному HTML-документі створити html-розміту, яка складається з наступних елементів : текст, блок (div), дві кнопки  
, кнопка "Зменшити" робить квадрат менше на 15 пікселів. 
Повторний натиск на кнопці Зменшити"    робить квадрат ще менше на 15 пікселів.
 
"Збільшити" – робить квадрат більше на 15 пікселів. Повторний натиск на кнопці "Зменшити"    робить квадрат ще більше на 15 пікселів.
                </p>
                
    <h1>Change Block Size</h1>
    <div id="square" style="width: 100px; height: 100px; background-color: lightblue;"></div>
    <br>
    <button onclick="decreaseSize()">Зменшити</button>
    <button onclick="increaseSize()">Збільшити</button>
    <br>
                <img src="5141.jpg" alt="lr51_5141"> 
                                                                                        
                `;
                break;     
                                                                
            case "Завдання № 6":
            contentHTML = `
                <h3>Текст завдання № 6</h3>
    <p>Подвоїти Значення у Списку</p>
    <ul id="numberList">
        <li>1</li>
        <li>4</li>
        <li>8</li>
        <li>16</li>
        <li>20</li>
        <li>30</li>
    </ul>
    <br>
    <button onclick="doubleValues()">Подвоїти</button>

                <p>Код та результат виконання:</p>   
                <br>
                <img src="5161.jpg" alt="lr51_5161"> 
                                                                        
                `;
                break;     

            case "Завдання № 8":
            contentHTML = `
                <h3>Завдання № 8</h3>
                <a href="lab6/index.html">Посилання на завдання</a>
                                        


                <p>Код та результат виконання:</p>   
                <br>
                <img src="5181.jpg" alt="lr51_5181"> 
                                                                        
                `;
                break;     
                        
            case "Завдання № 9":
            contentHTML = `
                <h3>Завдання № 9</h3>
                <a href="lab6/index2.html">Посилання на завдання</a>

               
               <p>Код та результат виконання:</p>   
               <br>
               <img src="5191.jpg" alt="lr51_5191"> 

                                                                                
                `;
                break;     
                                                        
            case "Завдання № 10":
            contentHTML = `
                <h3>Завдання № 10</h3>
                <a href="lab6/index3.html">Посилання на завдання</a>
                                        


                <p>Код та результат виконання:</p>   
                <br>
                <img src="5190.jpg" alt="lr51_5181"> 
                                                                                                                
                `;
                break;     



            case "ВИСНОВКИ за ЛР №6":
            contentHTML = `
                <h3>ВИСНОВКИ за ЛР №6</h3>
                                        
                <p>Виконуючи ці завдання, ми навчилися працювати з подіями в JavaScript, маніпулювати DOM-елементами, валідовувати введені дані, динамічно змінювати стилі елементів, а також створювати та видаляти елементи на сторінці. Ви також отримали досвід у генеруванні випадкових кольорів та застосуванні їх до елементів.</p>
                                                        
                `;
                break;                         
        
                
        default:
            contentHTML = "<p>Тут має відображатися зміст вибраного пункту меню.</p>";
            break;
    }

    // Виведення змісту відповідного пункту меню в блок
    document.getElementById("lab-content").innerHTML = contentHTML;
}

