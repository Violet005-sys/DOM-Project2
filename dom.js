const domLoaded = document.addEventListener('DOMContentLoaded', () => {

    const colorBox = document.getElementById('color-box');
    const changeBtn = document.getElementById('change-color-btn');

    const randomColor = () => {

        //const rgb = [0,1,2,3,4,5,6,'A','B','C','D','E','F'];
        const rgb = '0123456ABCDEF';

        var color ='#';

        for (let i = 0; i < 6; i++) {
            color += rgb[Math.floor(Math.random() * 16)];
        }

        return color;

    }

    const changeColor = () => {
        colorBox.style.backgroundColor = randomColor();
        changeBtn.style.backgroundColor = randomColor();
        
    }

    changeBtn.addEventListener('click', changeColor);
});

