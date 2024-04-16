//practice file

const randomColor = () => {

    //const rgb = [0,1,2,3,4,5,6,'A','B','C','D','E','F'];
    const rgb = '0123456ABCDEF';
    var color ='#';

    for (let i = 0; i < 6; i++) {
        color += rgb[Math.floor(Math.random() * 16)];
    }

    console.log(color);

}

randomColor();