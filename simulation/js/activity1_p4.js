function activity1_p4() {
    let btn_text = get_collapse_btn_text('Find p1 and q1', 'div-step-4');
    maindiv.innerHTML += `
    ${btn_text}
    <div class='collapse divide' id='div-step-4'>
        <div class="col">
        <p>We have equation</p>
        <p style='text-align: center;'><span style="display: inline-block;">$$ Y' = \\ aX' + b$$</span></p>
        <p>Now compairing with</p>
        <p style='text-align: center;'><span style="display: inline-block;">$$ \\frac {1}{Y'} = \\ \\frac{q_0}{p_0X} + \\frac{1}{p_0}$$</span></p>
        <p>where, </p>
        <p style='text-align: center;'><span style="display: inline-block;">$$ X' = \\frac{1}{X}, \\ Y' = \\ \\frac{1}{Y}$$</span></p>

        <br><br>

        <p>We can say that </p>
        <div class="row">
            <div class="col-md-6">
                <p>
                    <span style="display: inline-block;">$$ p_0 = \\ \\frac{1}{b} = \\ $$</span>
                    <input type="text" class="form-control" id="p1-inp" style="display: inline-block !important; width: 200px;">
                </p>
            </div>

            <div class="col-md-6">
                <p>
                    <span style="display: inline-block;">$$ q_0 = \\ ap_0 = \\ $$</span>
                    <input type="text" class="form-control" id="q1-inp" style="display: inline-block !important; width: 200px;">
                </p>
            </div>
        </div>

        <div><button class='btn btn-info' id="a1p4-btn" onclick='verify_pq_1();' >Verify</button></div>
        </div>
    </div>
    `;
    setTimeout(() => { MathJax.typeset(); }, 200);
    hide_all_steps();
    show_step('div-step-4');
    calculate_pq();
}
function calculate_pq() {
    p1 = 1 / mat_x[0];
    q1 = mat_x[1] * p1;
}
function verify_pq_1() {
    let val1 = document.getElementById('p1-inp');
    let val2 = document.getElementById('q1-inp');
    let btn = document.getElementById('a1p4-btn');
    console.log(p1, q1);
    if (!verify_values(parseFloat(val1.value), p1)) {
        alert(`Value of p0 is incorrect`);
        return;
    }
    if (!verify_values(parseFloat(val2.value), q1)) {
        alert(`Value of q0 is incorrect`);
        return;
    }
    btn.style.display = 'none';
    activity3();
}
//# sourceMappingURL=activity1_p4.js.map