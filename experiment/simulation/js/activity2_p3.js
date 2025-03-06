function activity2_p3() {
    let btn_text = get_collapse_btn_text('Find p2 and q2', 'div-step2-4');
    maindiv.innerHTML += `
    ${btn_text}
    <div class='collapse divide' id='div-step2-4'>
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
                    <span style="display: inline-block;">$$ p_1 = \\ \\frac{1}{b} = \\ $$</span>
                    <input type="text" class="form-control" id="p1-inp" style="display: inline-block !important; width: 200px;">
                </p>
            </div>

            <div class="col-md-6">
                <p>
                    <span style="display: inline-block;">$$ q_1 = \\ ap_1 = \\ $$</span>
                    <input type="text" class="form-control" id="q1-inp" style="display: inline-block !important; width: 200px;">
                </p>
            </div>
        </div>

        <div><button class='btn btn-info' id="a3p4-btn" onclick='verify_pq_2();' >Verify</button></div>
        </div>
    </div>
    `;
    setTimeout(() => { MathJax.typeset(); }, 200);
    hide_all_steps();
    show_step('div-step2-4');
    calculate_pq1();
}
function calculate_pq1() {
    p2 = 1 / mat2_x[0];
    q2 = mat2_x[1] * p2;
}
function verify_pq_2() {
    let val1 = document.getElementById('p1-inp');
    let val2 = document.getElementById('q1-inp');
    let btn = document.getElementById('a3p4-btn');
    console.log(p2, q2);
    if (!verify_values(parseFloat(val1.value), p2)) {
        alert(`Value of p1 is incorrect`);
        return;
    }
    if (!verify_values(parseFloat(val2.value), q2)) {
        alert(`Value of q1 is incorrect`);
        return;
    }
    btn.style.display = 'none';
    activity3();
}
//# sourceMappingURL=activity2_p3.js.map