function activity3_p3() {
    let btn_text = get_collapse_btn_text('Find p3 and q3', 'div-step3-4');
    maindiv.innerHTML += `
    ${btn_text}
    <div class='collapse divide' id='div-step3-4'>
        <div class="col">
        <p>We have equation</p>
        <p style='text-align: center;'><span style="display: inline-block;">$$ Y' = \\ aX' + b$$</span></p>
        <p>Now compairing with</p>
        <p style='text-align: center;'><span style="display: inline-block;">$$ \\frac {1}{Y'} = \\ \\frac{q_1}{p_1X} + \\frac{1}{p_1}$$</span></p>
        <p>where, </p>
        <p style='text-align: center;'><span style="display: inline-block;">$$ X' = \\frac{1}{X}, \\ Y' = \\ \\frac{1}{Y}$$</span></p>

        <br><br>

        <p>We can say that </p>
        <div class="row">
            <div class="col-md-6">
                <p>
                    <span style="display: inline-block;">$$ p_2 = \\ \\frac{1}{b} = \\ $$</span>
                    <input type="text" class="form-control" id="p2-inp" style="display: inline-block !important; width: 200px;">
                </p>
            </div>

            <div class="col-md-6">
                <p>
                    <span style="display: inline-block;">$$ q_2 = \\ ap_2 = \\ $$</span>
                    <input type="text" class="form-control" id="q2-inp" style="display: inline-block !important; width: 200px;">
                </p>
            </div>
        </div>

        <div><button class='btn btn-info' id="a3p4-btn" onclick='verify_pq1_3();' >Verify</button></div>
        </div>
    </div>
    `;
    setTimeout(() => { MathJax.typeset(); }, 200);
    hide_all_steps();
    show_step('div-step3-4');
    calculate_pq2();
}
function calculate_pq2() {
    p3 = 1 / mat3_x[0];
    q3 = mat3_x[1] * p3;
}
function verify_pq1_3() {
    let val1 = document.getElementById('p2-inp');
    let val2 = document.getElementById('q2-inp');
    let btn = document.getElementById('a3p4-btn');
    console.log(p3, q3);
    if (!verify_values(parseFloat(val1.value), p3)) {
        alert(`Value of p2 is incorrect`);
        return;
    }
    if (!verify_values(parseFloat(val2.value), q3)) {
        alert(`Value of q2 is incorrect`);
        return;
    }
    btn.style.display = 'none';
    activity4();
}
//# sourceMappingURL=activity3_p3.js.map