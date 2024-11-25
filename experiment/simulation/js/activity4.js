function activity4() {
    let btn_text = get_collapse_btn_text('Compare with p0 and q0', 'div-step4-1');
    maindiv.innerHTML += `
    ${btn_text}
    <div class='collapse divide' id='div-step4-1'>
        <div class="col">
        <p>We have following</p>

        <br>
        <div class="row">
            <div class="col-md-6">
                <p>
                    <span style="display: inline-block;">$$ p_0 = \\ \\frac{1}{b} = \\ $$</span>
                    <input type="text" disabled class="form-control" value='${p1}' style="display: inline-block !important; width: 200px;">
                </p>
            </div>

            <div class="col-md-6">
                <p>
                    <span style="display: inline-block;">$$ q_0 = \\ ap_0 = \\ $$</span>
                    <input type="text" disabled class="form-control" value='${q1}' style="display: inline-block !important; width: 200px;">
                </p>
            </div>
        </div>


        <div class="row">
            <div class="col-md-6">
                <p>
                    <span style="display: inline-block;">$$ p_2 = \\ \\frac{1}{b} = \\ $$</span>
                    <input type="text" disabled class="form-control" value='${p3}' style="display: inline-block !important; width: 200px;">
                </p>
            </div>

            <div class="col-md-6">
                <p>
                    <span style="display: inline-block;">$$ q_2 = \\ ap_2 = \\ $$</span>
                    <input type="text" disabled class="form-control" value='${q3}' style="display: inline-block !important; width: 200px;">
                </p>
            </div>
        </div>

        
        <p>We have ideal values of whichever model estimated parameters are close to this pair then that model has better fit. </p>

        <br>
        <div>
            <canvas id='best-fit-plot'></canvas>
        </div>
        <br>


        <div id='a4-ques'></div>
        </div>
    </div>
    `;
    // load_a4_ques();
    setTimeout(() => { MathJax.typeset(); }, 400);
    hide_all_steps();
    show_step('div-step4-1');
    calculate_for_best_fit();
}
function load_a4_ques() {
    let ques_text = `Which model has better fit?`;
    let options = [`<span style='font-size: 16px;' >$$ b \\Sigma {X^2} + a \\Sigma {X} = \\Sigma XY$$</span> <span style='font-size: 16px;' >$$ b \\Sigma {X} + an = \\Sigma {Y}$$</span>`,
        `<span style='font-size: 16px;' >$$ b \\Sigma {Y^2} + a \\Sigma {Y} = \\Sigma XY$$</span> <span style='font-size: 16px;' >$$ b \\Sigma {Y} + an = \\Sigma {X}$$</span>`,
    ];
    let par = document.getElementById('a4-ques');
    let new_question = new Updated_Question(ques_text, options, a4_ans, par, () => { });
    new_question.load_question();
}
function calculate_for_best_fit() {
    //initialize
    y_0_origin = [];
    y0_diff_sum = [];
    y_2_origin = [];
    y2_diff_sum = [];
    // calculate sum of square of difference for p0 and q0
    for (let i = 0; i < X_origin.length; i++) {
        let res = 1 / ((q1 / (p1 * X_origin[i])) + (1 / p1));
        y_0_origin.push(res);
        y0_diff_sum.push(Math.pow((y_origin[i] - res), 2));
    }
    // calculate sum of square of difference for p2 and q2
    for (let i = 1; i < X_origin.length; i++) {
        let res = 1 / ((q3 / p3) * (1 / X_origin[i]) + (1 / p3));
        y_2_origin.push(res);
        y2_diff_sum.push(Math.pow((y_origin[i] - res), 2));
    }
    y_2_origin.unshift(0);
    y2_diff_sum.unshift(0);
    console.log('calculated y0 =>' + y_0_origin);
    console.log('calculated y2 =>' + y_2_origin);
    plot_for_best_fit();
}
function plot_for_best_fit() {
    let ctx = document.getElementById('best-fit-plot');
    console.log(ctx);
    if (typeof chart != 'undefined') {
        chart.destroy();
    }
    // let labels = [0.004, 0.007, 0.010, 0.014, 0.020, 0.029, 0.039];
    // let data1=[82.28,96.86,104.07,108.28,112.48,117.68,125.35];//hi_expt
    // let data2=[146.90,183.50,204.11,230.09,256.89,290.83,323.49];//hi_st
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: X_origin,
            datasets: [
                {
                    label: 'Y-origin',
                    data: y_origin,
                    fill: false,
                    borderColor: 'green',
                    tension: 0.5,
                    showLine: true
                    // yAxisID: 'A',
                    // borderWidth: 1,
                    // borderColor: "green",
                    // backgroundColor: "rgba(34, 139, 34, 0.5)",
                },
                {
                    label: 'First Model',
                    data: y_0_origin,
                    fill: false,
                    borderColor: 'red',
                    tension: 0.5,
                    showLine: true
                    // yAxisID: 'A',
                    // borderWidth: 1,
                    // borderColor: "green",
                    // backgroundColor: "rgba(34, 139, 34, 0.5)",
                },
                {
                    label: 'Third Model',
                    data: y_2_origin,
                    fill: false,
                    borderColor: 'blue',
                    tension: 0.5,
                    showLine: true
                    // yAxisID: 'A',
                    // borderWidth: 1,
                    // borderColor: "green",
                    // backgroundColor: "rgba(34, 139, 34, 0.5)",
                }
            ]
        },
        options: {
            maintainAspectRatio: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Y',
                        font: { size: 14, weight: 'bold' }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'X',
                        font: { size: 14, weight: 'bold' }
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: `Y-origin vs first Model vs second Modal vs third model`,
                    font: { size: 18 },
                },
                legend: { labels: { font: { size: 14, weight: 'bold' } } }
            },
        }
    });
    //root.appendChild(ctx);
    calculate_sq_sum();
}
function calculate_sq_sum() {
    diffsum_first_model = 0;
    diffsum_third_model = 0;
    for (let i = 0; i < y0_diff_sum.length; i++) {
        diffsum_first_model += y0_diff_sum[i];
        diffsum_third_model += y2_diff_sum[i];
    }
    console.log(diffsum_first_model, diffsum_third_model);
    if (diffsum_first_model < diffsum_third_model) {
        a4_ans = '1';
    }
    else {
        a4_ans = '2';
    }
    load_a4_ques();
}
//activity4();
//# sourceMappingURL=activity4.js.map