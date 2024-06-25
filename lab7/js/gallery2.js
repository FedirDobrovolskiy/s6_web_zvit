// scripts.js

// Оголосити об'єкт formData
let formData = { email: "", message: "" };

// Функція для збереження даних у локальне сховище
function saveToLocalStorage() {
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

// Функція для завантаження даних з локального сховища
function loadFromLocalStorage() {
    const savedData = localStorage.getItem("feedback-form-state");
    if (savedData) {
        formData = JSON.parse(savedData);
        document.querySelector('input[name="email"]').value = formData.email;
        document.querySelector('textarea[name="message"]').value = formData.message;
    }
}

// Завантажити дані з локального сховища при завантаженні сторінки
document.addEventListener('DOMContentLoaded', loadFromLocalStorage);

// Використовувати метод делегування для відстеження змін у формі
document.querySelector('.feedback-form').addEventListener('input', event => {
    const { name, value } = event.target;
    formData[name] = value;
    saveToLocalStorage();
});

// Обробка відправлення форми
document.querySelector('.feedback-form').addEventListener('submit', event => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
    } else {
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        formData = { email: "", message: "" };
        event.target.reset();
    }
});
