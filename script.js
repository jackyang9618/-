// script.js
document.addEventListener('DOMContentLoaded', () => {
    const books = {
        "正册": [
            {
                image: "images/judgment1.jpg",
                judgment: "可叹停机德，堪怜咏絮才。",
                annotation: "林黛玉与薛宝钗判词，出自《红楼梦》第五回"
            },
            {
                image: "images/judgment2.jpg",
                judgment: "二十年来辨是非，榴花开处照宫闱。",
                annotation: "贾元春判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment3.jpg",
                judgment: "二十年来辨是非，榴花开处照宫闱。",
                annotation: "贾元春判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment4.jpg",
                judgment: "二十年来辨是非，榴花开处照宫闱。",
                annotation: "贾元春判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment5.jpg",
                judgment: "二十年来辨是非，榴花开处照宫闱。",
                annotation: "贾元春判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment6.jpg",
                judgment: "二十年来辨是非，榴花开处照宫闱。",
                annotation: "贾元春判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment7.jpg",
                judgment: "二十年来辨是非，榴花开处照宫闱。",
                annotation: "贾元春判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment8.jpg",
                judgment: "二十年来辨是非，榴花开处照宫闱。",
                annotation: "贾元春判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment9.jpg",
                judgment: "二十年来辨是非，榴花开处照宫闱。",
                annotation: "贾元春判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment10.jpg",
                judgment: "二十年来辨是非，榴花开处照宫闱。",
                annotation: "贾元春判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment11.jpg",
                judgment: "二十年来辨是非，榴花开处照宫闱。",
                annotation: "贾元春判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment12.jpg",
                judgment: "富贵又何为？襁褓之间父母违。",
                annotation: "史湘云判词，《红楼梦》第五回"
            }
        ],
        "副册": [
            {
                image: "images/judgment13.jpg",
                judgment: "情天情海幻情身，情既相逢必主淫。",
                annotation: "秦可卿判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment14.jpg",
                judgment: "桃李春风结子完，到头谁似一盆兰？",
                annotation: "李纨判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment15.jpg",
                judgment: "桃李春风结子完，到头谁似一盆兰？",
                annotation: "李纨判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment16.jpg",
                judgment: "桃李春风结子完，到头谁似一盆兰？",
                annotation: "李纨判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment17.jpg",
                judgment: "桃李春风结子完，到头谁似一盆兰？",
                annotation: "李纨判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment18.jpg",
                judgment: "桃李春风结子完，到头谁似一盆兰？",
                annotation: "李纨判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment19.jpg",
                judgment: "桃李春风结子完，到头谁似一盆兰？",
                annotation: "李纨判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment20.jpg",
                judgment: "桃李春风结子完，到头谁似一盆兰？",
                annotation: "李纨判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment21.jpg",
                judgment: "桃李春风结子完，到头谁似一盆兰？",
                annotation: "李纨判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment22.jpg",
                judgment: "桃李春风结子完，到头谁似一盆兰？",
                annotation: "李纨判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment23.jpg",
                judgment: "桃李春风结子完，到头谁似一盆兰？",
                annotation: "李纨判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment24.jpg",
                judgment: "机关算尽太聪明，反算了卿卿性命。",
                annotation: "王熙凤判词，《红楼梦》第五回"
            }
        ],
        "又副册": [
            {
                image: "images/judgment25.jpg",
                judgment: "一个是阆苑仙葩，一个是美玉无瑕。",
                annotation: "贾宝玉与林黛玉判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment26.jpg",
                judgment: "都道是金玉良缘，俺只念木石前盟。",
                annotation: "薛宝钗判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment27.jpg",
                judgment: "都道是金玉良缘，俺只念木石前盟。",
                annotation: "薛宝钗判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment28.jpg",
                judgment: "都道是金玉良缘，俺只念木石前盟。",
                annotation: "薛宝钗判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment29.jpg",
                judgment: "都道是金玉良缘，俺只念木石前盟。",
                annotation: "薛宝钗判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment30.jpg",
                judgment: "都道是金玉良缘，俺只念木石前盟。",
                annotation: "薛宝钗判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment31.jpg",
                judgment: "都道是金玉良缘，俺只念木石前盟。",
                annotation: "薛宝钗判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment32.jpg",
                judgment: "都道是金玉良缘，俺只念木石前盟。",
                annotation: "薛宝钗判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment33.jpg",
                judgment: "都道是金玉良缘，俺只念木石前盟。",
                annotation: "薛宝钗判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment34.jpg",
                judgment: "都道是金玉良缘，俺只念木石前盟。",
                annotation: "薛宝钗判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment35.jpg",
                judgment: "都道是金玉良缘，俺只念木石前盟。",
                annotation: "薛宝钗判词，《红楼梦》第五回"
            },
            {
                image: "images/judgment36.jpg",
                judgment: "凡鸟偏从末世来，都知爱慕此生才。",
                annotation: "王熙凤判词，《红楼梦》第五回"
            }
        ]
    };
    function renderBook(book) {
        const bookElement = document.querySelector(`h2:contains(${book.name})`);
        const scrollContainer = bookElement.nextElementSibling;

        book.data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.judgment;
            
            const judg = document.createElement('p');
            judg.textContent = item.judgment;
            
            const annot = document.createElement('p');
            annot.textContent = item.annotation;

            card.appendChild(img);
            card.appendChild(judg);
            card.appendChild(annot);
            scrollContainer.appendChild(card);
        });
    }

    ['正册', '副册', '又副册'].forEach(name => renderBook({ name, data: books[name] }));

    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'peony-petal';
        
        const random = Math.random();
        petal.style.left = `${random * 100}%`;
        petal.style.animationDuration = `${1 + random * 3}s`;
        
        document.querySelector('.peony-petal-container').appendChild(petal);
        
        setTimeout(() => petal.remove(), 6000);
    }

    setInterval(createPetal, 1000);

    const peonyImage = document.querySelector('.blooming-peony img');
    peonyImage.style.animation = 'bloom 4s ease-out forwards';
});