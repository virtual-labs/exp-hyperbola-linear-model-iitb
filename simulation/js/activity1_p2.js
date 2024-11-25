let temp = [];
function activity1_p2() {
    let btn_txt = get_collapse_btn_text('Table and Summation', 'div-step-tb');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='div-step-tb'><h4 class='center-text fs-20px'>Calculate: </h4>Fill the values in the given table <br><div id='tb-box2'></div>


    <div id="verify-a1p2-tab" style='display: none;'>
        <h4>Using the estimated tables values calculate following: </h4>

        <div class="col">

            <div class="row">
                <div class="col-4"><span>$$ \\Sigma X' \\ = \\ $$</span></div>
                <div class="col-7"><input class='form-control' id='xi-inp' /></div>
            </div>

            <div class="row">
                <div class="col-4"><span>$$ \\Sigma (X')^2 \\ = \\ $$</span></div>
                <div class="col-7"><input class='form-control' id='xi2-inp' /></div>
            </div>

            <div class="row">
                <div class="col-4"><span>$$ \\Sigma Y' \\ = \\ $$</span></div>
                <div class="col-7"><input class='form-control' id='yi-inp' /></div>
            </div>

            <div class="row">
                <div class="col-4"><span>$$ \\Sigma (X'Y') \\ = \\ $$</span></div>
                <div class="col-7"><input class='form-control' id='xiyi-inp' /></div>
            </div>

        </div>

        <div style='text-align: center;'><button id="a1p2-btn-2" class="btn btn-info" onclick='verify_a1p2_sum();' >Verify</button></div>
    </div>
    </div>`;
    let header = [
        '<span>$$ X $$</span>',
        '<span>$$ Y_{0} $$</span>',
        "<span>$$ X' = \\frac{1}{X} $$</span>",
        "<span>$$ Y' = \\frac{1}{Y_0} $$</span>",
        "<span>$$ (X')^2 $$</span>",
        "<span>$$ X'Y' $$</span>"
    ];
    let act1_table_data = [];
    for (let i = 0; i < X.length; i++) {
        let x_i = 1 / X[i];
        let y_i = 1 / Y[i];
        let arr = [
            parseFloat(X[i].toFixed(4)),
            parseFloat(Y[i].toFixed(4)),
            parseFloat((x_i).toFixed(4)),
            parseFloat((y_i).toFixed(4)),
            parseFloat((Math.pow(x_i, 2)).toFixed(4)),
            parseFloat((x_i * y_i).toFixed(4)),
        ];
        act1_table_data.push(arr);
        temp.push([0, 0, 0, 0, 0, 0]);
    }
    console.log(act1_table_data);
    for (let i = 0; i < act1_table_data.length; i++) {
        for (let j = 0; j < act1_table_data[0].length; j++) {
            temp[i][j] = act1_table_data[i][j];
        }
    }
    let vc = [2, 3, 4, 5]; // verify column index
    let vv = [temp[0][2], temp[0][3], temp[0][4], temp[0][5]]; // verify values
    let tb_box = document.getElementById('tb-box2');
    let new_table = new Verify_Rows_Cols(header, temp, [0], [vc], '', tb_box, true, true, enable_a1p2_btn);
    new_table.load_table();
    let tab_ele = new_table.get_table_element();
    tab_ele.style.fontSize = "16px";
    hide_all_steps();
    show_step('div-step-tb');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function enable_a1p2_btn() {
    let ele = document.getElementById('verify-a1p2-tab');
    ele.style.display = 'block';
    act1_table_data = temp;
    console.log(act1_table_data);
    // to calcualte all summation values
    calculate_a1_summation();
}
function verify_a1p2_sum() {
    let val1 = document.getElementById('xi-inp');
    let val2 = document.getElementById('xi2-inp');
    let val3 = document.getElementById('yi-inp');
    let val4 = document.getElementById('xiyi-inp');
    let btn = document.getElementById('a1p2-btn-2');
    console.log(sigma_xi, sigma_xi_2, sigma_yi, sigma_xi_yi);
    if (!verify_values(parseFloat(val1.value), sigma_xi)) {
        alert(`Value of X' is incorrect`);
        return;
    }
    if (!verify_values(parseFloat(val2.value), sigma_xi_2)) {
        alert(`Value of (X')^2 is incorrect`);
        return;
    }
    if (!verify_values(parseFloat(val3.value), sigma_yi)) {
        alert(`Value of Y' is incorrect`);
        return;
    }
    if (!verify_values(parseFloat(val4.value), sigma_xi_yi)) {
        alert(`Value of X'Y' is incorrect`);
        return;
    }
    btn.style.display = 'none';
    activity1_p3();
    act1_table_data = temp;
}
//to calcualate all a1 summation
function calculate_a1_summation() {
    sigma_xi = 0;
    sigma_xi_2 = 0;
    sigma_xi_yi = 0;
    sigma_yi = 0;
    for (let i = 0; i < temp.length; i++) {
        sigma_xi += temp[i][2];
        sigma_xi_2 += temp[i][4];
        sigma_yi += temp[i][3];
        sigma_xi_yi += temp[i][5];
    }
}
//activity1_p2();
//# sourceMappingURL=activity1_p2.js.map