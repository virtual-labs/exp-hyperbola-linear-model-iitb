let temp3 = [];
function activity3_p1() {
    let btn_txt = get_collapse_btn_text('Table and Summation', 'div-step-tb3');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='div-step-tb3'><h4 class='center-text fs-20px'>Calculate: </h4>Fill the values in the given table <br><div id='tb-box3'></div>


    <div id="verify-a2p2-tab" style='display: none;'>
        <h4>Using the estimated tables values calculate following: </h4>

        <div class="col">

            <div class="row">
                <div class="col-4"><span>$$ \\Sigma X \\ = \\ $$</span></div>
                <div class="col-7"><input class='form-control' id='x-3-inp' /></div>
            </div>

            <div class="row">
                <div class="col-4"><span>$$ \\Sigma (X)^2 \\ = \\ $$</span></div>
                <div class="col-7"><input class='form-control' id='x2-3-inp' /></div>
            </div>

            <div class="row">
                <div class="col-4"><span>$$ \\Sigma Y'' \\ = \\ $$</span></div>
                <div class="col-7"><input class='form-control' id='x2yi-3-inp' /></div>
            </div>

            <div class="row">
                <div class="col-4"><span>$$ \\Sigma (XY'') \\ = \\ $$</span></div>
                <div class="col-7"><input class='form-control' id='xyi-3-inp' /></div>
            </div>

        </div>

        <div style='text-align: center;'><button id="a3p2-btn-2" class="btn btn-info" onclick='verify_a3p2_sum();' >Verify</button></div>
    </div>
    </div>`;
    let header = [
        '<span>$$ X $$</span>',
        '<span>$$ Y $$</span>',
        "<span>$$ Y' = \\frac{1}{X} $$</span>",
        "<span>$$ X^2 $$</span>",
        "<span>$$ Y'' $$</span>",
        "<span>$$ XY'' $$</span>"
    ];
    let act3_table_data = [];
    for (let i = 0; i < X.length; i++) {
        let y_i = 1 / Y[i];
        let ydd = X[i] * y_i;
        let arr = [
            parseFloat(X[i].toFixed(4)),
            parseFloat(Y[i].toFixed(4)),
            parseFloat((y_i).toFixed(4)),
            parseFloat((Math.pow(X[i], 2)).toFixed(4)),
            parseFloat((ydd).toFixed(4)),
            parseFloat((X[i] * ydd).toFixed(4))
        ];
        act3_table_data.push(arr);
        temp3.push([0, 0, 0, 0, 0, 0]);
    }
    console.log(act3_table_data);
    for (let i = 0; i < act3_table_data.length; i++) {
        for (let j = 0; j < act3_table_data[0].length; j++) {
            temp3[i][j] = act3_table_data[i][j];
        }
    }
    let vc = [2, 3, 4, 5]; // verify column index
    let vv = [temp3[0][2], temp3[0][3], temp3[0][4], temp3[0][5]]; // verify values
    let tb_box = document.getElementById('tb-box3');
    let new_table = new Verify_Rows_Cols(header, temp3, [0], [vc], '', tb_box, true, true, enable_a3p2_btn);
    new_table.load_table();
    let tab_ele = new_table.get_table_element();
    tab_ele.style.fontSize = "16px";
    hide_all_steps();
    show_step('div-step-tb3');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function enable_a3p2_btn() {
    let ele = document.getElementById('verify-a2p2-tab');
    ele.style.display = 'block';
    act3_table_data = temp3;
    console.log(act3_table_data);
    // to calcualte all summation values
    calculate_a3_summation();
}
function verify_a3p2_sum() {
    let val1 = document.getElementById('x-3-inp');
    let val2 = document.getElementById('x2-3-inp');
    let val3 = document.getElementById('x2yi-3-inp');
    let val4 = document.getElementById('xyi-3-inp');
    let btn = document.getElementById('a3p2-btn-2');
    console.log(sigma3_x, sigma3_x_2, sigma3_ydd, sigma3_xydd);
    if (!verify_values(parseFloat(val1.value), sigma3_x)) {
        alert(`Value of X' is incorrect`);
        return;
    }
    if (!verify_values(parseFloat(val2.value), sigma3_x_2)) {
        alert(`Value of (X')^2 is incorrect`);
        return;
    }
    if (!verify_values(parseFloat(val3.value), sigma3_ydd)) {
        alert(`Value of Y'' is incorrect`);
        return;
    }
    if (!verify_values(parseFloat(val4.value), sigma3_xydd)) {
        alert(`Value of XY'' is incorrect`);
        return;
    }
    btn.style.display = 'none';
    activity3_p2();
    act3_table_data = temp3;
}
//to calcualate all a1 summation
function calculate_a3_summation() {
    sigma3_x = 0;
    sigma3_x_2 = 0;
    sigma3_xydd = 0;
    sigma3_ydd = 0;
    for (let i = 0; i < temp3.length; i++) {
        sigma3_x += temp3[i][0];
        sigma3_x_2 += temp3[i][3];
        sigma3_ydd += temp3[i][4];
        sigma3_xydd += temp3[i][5];
    }
}
//# sourceMappingURL=activity3_p1.js.map