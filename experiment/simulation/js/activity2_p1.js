let temp2 = [];
function activity2_p1() {
    let btn_txt = get_collapse_btn_text('Table and Summation', 'div-step-tb2');
    maindiv.innerHTML += `
    ${btn_txt}
    <div class='collapse divide' id='div-step-tb2'><h4 class='center-text fs-20px'>Calculate: </h4>Fill the values in the given table <br><div id='tb-box2'></div>


    <div id="verify-a2p2-tab" style='display: none;'>
        <h4>Using the estimated tables values calculate following: </h4>

        <div class="col">

            <div class="row">
                <div class="col-4"><span>$$ \\Sigma X' \\ = \\ $$</span></div>
                <div class="col-7"><input class='form-control' id='xi-2-inp' /></div>
            </div>

            <div class="row">
                <div class="col-4"><span>$$ \\Sigma (X')^2 \\ = \\ $$</span></div>
                <div class="col-7"><input class='form-control' id='xi2-2-inp' /></div>
            </div>

            <div class="row">
                <div class="col-4"><span>$$ \\Sigma Y' \\ = \\ $$</span></div>
                <div class="col-7"><input class='form-control' id='yi-2-inp' /></div>
            </div>

            <div class="row">
                <div class="col-4"><span>$$ \\Sigma (X'Y') \\ = \\ $$</span></div>
                <div class="col-7"><input class='form-control' id='xiyi-2-inp' /></div>
            </div>

        </div>

        <div style='text-align: center;'><button id="a2p2-btn-2" class="btn btn-info" onclick='verify_a2p2_sum();' >Verify</button></div>
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
    let act2_table_data = [];
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
        act2_table_data.push(arr);
        temp2.push([0, 0, 0, 0, 0, 0]);
    }
    console.log(act2_table_data);
    for (let i = 0; i < act2_table_data.length; i++) {
        for (let j = 0; j < act2_table_data[0].length; j++) {
            temp2[i][j] = act2_table_data[i][j];
        }
    }
    let vc = [2, 3, 4, 5]; // verify column index
    let vv = [temp2[0][2], temp2[0][3], temp2[0][4], temp2[0][5]]; // verify values
    let tb_box = document.getElementById('tb-box2');
    let new_table = new Verify_Rows_Cols(header, temp2, [0], [vc], '', tb_box, true, true, enable_a2p2_btn);
    new_table.load_table();
    let tab_ele = new_table.get_table_element();
    tab_ele.style.fontSize = "16px";
    hide_all_steps();
    show_step('div-step-tb2');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function enable_a2p2_btn() {
    let ele = document.getElementById('verify-a2p2-tab');
    ele.style.display = 'block';
    act2_table_data = temp2;
    console.log(act2_table_data);
    // to calcualte all summation values
    calculate_a2_summation();
}
function verify_a2p2_sum() {
    let val1 = document.getElementById('xi-2-inp');
    let val2 = document.getElementById('xi2-2-inp');
    let val3 = document.getElementById('yi-2-inp');
    let val4 = document.getElementById('xiyi-2-inp');
    let btn = document.getElementById('a2p2-btn-2');
    console.log(sigma2_xi, sigma2_xi_2, sigma2_yi, sigma2_xi_yi);
    if (!verify_values(parseFloat(val1.value), sigma2_xi)) {
        alert(`Value of X' is incorrect`);
        return;
    }
    if (!verify_values(parseFloat(val2.value), sigma2_xi_2)) {
        alert(`Value of (X')^2 is incorrect`);
        return;
    }
    if (!verify_values(parseFloat(val3.value), sigma2_yi)) {
        alert(`Value of Y' is incorrect`);
        return;
    }
    if (!verify_values(parseFloat(val4.value), sigma2_xi_yi)) {
        alert(`Value of X'Y' is incorrect`);
        return;
    }
    btn.style.display = 'none';
    activity2_p2();
    act2_table_data = temp2;
}
//to calcualate all a1 summation
function calculate_a2_summation() {
    sigma2_xi = 0;
    sigma2_xi_2 = 0;
    sigma2_xi_yi = 0;
    sigma2_yi = 0;
    for (let i = 0; i < temp2.length; i++) {
        sigma2_xi += temp2[i][2];
        sigma2_xi_2 += temp2[i][4];
        sigma2_yi += temp2[i][3];
        sigma2_xi_yi += temp2[i][5];
    }
}
//# sourceMappingURL=activity2_p1.js.map