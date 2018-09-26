window.onload = (e) => {

    //controls
    let minusTop = document.querySelector('.up').firstElementChild;
    let minusLeft = document.querySelector('.left').firstElementChild;
    let plusRight = document.querySelector('.right').firstElementChild;
    let plusBottom = document.querySelector('.bottom').firstElementChild;

    //environment
    let center = document.querySelector('.center');
    let offsetLeftMinus = 0;

    // squeres array
    let rows = document.getElementsByClassName('row');

//Временно не активно
/*    document.body.onmouseover = function (e) {
        console.log(e.target);
        let target = e.target || e.srcElement;
        let tdParent = target.parentNode;
        let attrInnerSQ = document.getElementsByClassName('row')[0].children[0].getAttribute('data-action');

        //фильтруем объекты TD
        if (target.hasAttribute('spy')) {
            //console.log("squere");
            target.onclick = function () {
                //console.log("click squere");
                tdParent.removeChild(target); //удаляем текущий объект
            }

        }
    };*/


    //фильтрация чисто элементов центральной таблицы (контролы удалены)
    var testElements = document.getElementsByClassName('squere');
    var testDivs = Array.prototype.filter.call(testElements, function(testElement){
        return testElement.className === 'squere';
    });


    //for future fichers
    let centerSize =
        {
          width: center.getBoundingClientRect().width,
          height: center.getBoundingClientRect().height
        };

    let up = minusTop.parentElement;
    up.style.width = centerSize.width + 'px';
    //console.log(up.width);

    //addRows
    plusBottom.addEventListener('click', (e) => {
        let row = rows[0].cloneNode(true);
        center.appendChild(row);
        if (rows.length === 2) {
            minusLeft.style.visibility = 'visible';
        }
    });
    //addColumn
    plusRight.addEventListener('click', (e) => {
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let singleSquere = document.querySelector('.row .squere').cloneNode(true);
            row.appendChild(singleSquere);
            if  (typeof rows[0].childNodes[3] === 'undefined') {
                minusTop.style.visibility = 'hidden';
            } else {
                minusTop.style.visibility = 'visible';
            }
        }


    });
    //removeRow
    minusLeft.addEventListener('click', (e) => {

        if (rows.length === 1) {
            return false;
        }

        center.removeChild(currentRow);

        if (rows.length === 1) {
            minusLeft.style.visibility = 'hidden';
        }

    });
    //removeColumn разобрпать
    minusTop.addEventListener('click', (e) => {
        outer :for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            if (row.childNodes.length <= 3) {
                return false;
            }
            for (let x = 0; x < row.children.length; x++) {
                let item = row.children[x];
                item.remove();
                if (row.children.length <= 1) {
                    minusTop.style.visibility = 'hidden';
                }
                continue outer;
            }
        }
    });

    let offsetTopMinus = 0;
    let currentRow;

    //visible or hidden minusControl buttons
    center.addEventListener('mouseover', (e) => {
        minusTop.style.visibility = 'visible';
        minusLeft.style.visibility = 'visible';

        let targetAttr = e.target.getAttribute('data-action');

        if (targetAttr) {
            currentRow = e.target.parentNode;

            let centerChildren = center.children;
            // console.log(centerChildren.item(currentRow));
            console.dir(currentRow);
        }

        offsetLeftMinus = e.target.getBoundingClientRect().top - center.getBoundingClientRect().top;
        minusLeft.style.top = offsetLeftMinus + 'px';

        offsetTopMinus = e.target.getBoundingClientRect().left - center.getBoundingClientRect().left;
        minusTop.style.left = offsetTopMinus + 'px';

    });
    center.addEventListener('mouseout', (e) => {
        minusTop.style.visibility = 'hidden';
        minusLeft.style.visibility = 'hidden';
        //console.log(currentRow);
    });

    minusLeft.addEventListener('mouseover', (e) => {
        minusTop.style.visibility = 'visible';
        minusLeft.style.visibility = 'visible';
    });
    minusLeft.addEventListener('mouseout', (e) => {
        minusTop.style.visibility = 'hidden';
        minusLeft.style.visibility = 'hidden';
    });

    minusTop.addEventListener('mouseover', (e) => {
        minusTop.style.visibility = 'visible';
        minusLeft.style.visibility = 'visible';
    });
    minusTop.addEventListener('mouseout', (e) => {
        minusTop.style.visibility = 'hidden';
        minusLeft.style.visibility = 'hidden';
    });

};