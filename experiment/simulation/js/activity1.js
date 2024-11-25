let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `

    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h5 class="center-text fs-20px fw-600">Regression: Transforming rectangular hyperbola using linear model</h5>

        <div class="fs-16px">
            Consider the following rectangular hyperbola
            <br>
            <p style='text-align: center; font-weight: 500;'><span>$$ y = \\frac{ \\phi x}{ \\psi + x} + \\epsilon $$</span></p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='activity1_p1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function show_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    temp_btn.remove();
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
       
        <button class='btn btn-info std-btn' style='position: relative; top: 15vw; left: 70vw;'  id='temp-btn-1' >Start</button>
    </div>
    </div>

    `;
    maindiv.innerHTML += text;
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Generated Dataset", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <h4  style='text-align: left;' class='fb-800 fs-20px'>Step 1: </h4>
        <br>

        <div style='margin-top: 2vw;'>

            <div class="fs-16px" style='text-align: left;'>
                <br>
                <p class="fs-16px">From the available n data points, we find the model <span style='display: inline-block;'>$$ \\frac{1}{y_0} = \\frac{q_0}{p_0 x} + \\frac{1}{p_0} $$</span> by requiring that the sum of squares of the residuals be minimized.</p>

                <p class="fs-16px">
                    <span style='display: inline-block;'>$$ \\phi , \\psi \\ and \\ \\epsilon $$</span> are population paramenters, and a and b are the random variables, computed from the sampled data.
                </p>
            </div>
        </div>

        <br>
        <div class='col'>

            <div class='row' id='s1' >
                <div class='col-6'>Choose the number of Observations</div>
                <div class='col-6'>
                    <select class='form-select fs-16px' id='act1-n-inp' onchange='set_n();' >

                    </select>
                    <span class='fs-16px' id='dsp-N'></span>
                </div>
            </div>

            <br>

            <div class='row'>
                <button class='btn btn-info std-btn' style='margin: auto; display: none;' id='act1-btn-1' onclick='internal_calculations_1();' >Generate X Y</button>
            </div>

        </div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    plot_generated_xy();
    setTimeout(() => { MathJax.typeset(); }, 300);
    load_dd1_options();
}
//for loading all options 
function load_dd1_options() {
    let dd = document.getElementById('act1-n-inp');
    //let inp: HTMLSelectElement = <HTMLSelectElement> document.getElementById('act1-alpha-inp');
    dd.innerHTML = ``;
    // inp.innerHTML = '';
    let op = new Option('--Select--', '0', true);
    dd.add(op);
    // let op1 = new Option('--Select Alpha Value--', '0', true);
    // inp.add(op1);
    for (let i = 20; i < 31; i++) {
        let op = new Option(i.toString(), i.toString());
        dd.add(op);
    }
    // for(let i=0; i<alpha_dd_options.length; i++) {
    //     let op = new Option(alpha_dd_options[i].toString(), alpha_dd_options[i].toString());
    //     inp.add(op);
    // }
}
//for setting number of observations
function set_n() {
    let dd = document.getElementById('act1-n-inp');
    //let inp: HTMLSelectElement = <HTMLSelectElement> document.getElementById('act1-alpha-inp');
    let btn = document.getElementById('act1-btn-1');
    if (dd.value != '0') {
        N = parseInt(dd.value);
        btn.style.display = 'block';
        //inp.disabled = false;
    }
    else {
        N = 0;
        //inp.value = '';
        //inp.disabled = true; 
        btn.style.display = 'none';
    }
}
//Internal calculations to generate X and Y vectors
function internal_calculations_1() {
    let dd = document.getElementById('act1-n-inp');
    let dsp = document.getElementById('dsp-N');
    console.log(dd);
    dd.remove();
    dsp.innerText = `n = ${N}`;
    //generate X vector (ascending)
    // generate_random_X();
    //generate random beta0 and beta1 values
    // beta0 = (Math.random()*2) - 1;
    // beta1 = (Math.random()*2) - 1;
    // console.log('beta0 = ' + beta0, "beta1 = " + beta1);
    y_origin = [];
    //generate epsilon values
    generate_epsilon_values();
    //generate x values
    generate_x();
    //generate y0 values
    y0 = [];
    for (let i = 0; i < X.length; i++) {
        y0.push((p * X[i]) / (q + X[i]));
    }
    console.log(`y0 values genereted =>` + y0);
    //calculate Y values
    let last_index = y0.length - 1;
    Y = [];
    for (let i = 0; i < y0.length; i++) {
        Y.push(y0[i] + (y0[last_index] * epsilon[i]));
    }
    console.log(`Y values genereted =>` + Y);
    // console.log(X);
    // console.log(Y2);
    //show X Y table
    show_x_y();
    //activity1_p1();
}
//for generating x
function generate_x() {
    //generating N random values from 0 to 12*q
    X = [];
    for (let i = 1; i <= N; i++) {
        X.push(((12 * q - 0.01) * i) / N);
    }
    console.log(`Generated X values => ${X}`);
}
//for generating random X vector
// function generate_random_X() {
//     let arr = [];
//     X = [];
//     while(arr.length < N) {
//         let rv = 20 + Math.floor(Math.random()*60);
//         if(arr.indexOf(rv) == -1) {
//             arr.push(rv);
//         }
//     }
//     arr = arr.sort(function(a, b) {return a-b;});
//     //console.log(arr);
//     X = arr;
//     console.log(X);
// }
//for generating epsilon values
function generate_epsilon_values() {
    let arr = [];
    epsilon = [];
    while (arr.length < N) {
        let rv = Math.random() * 1.2 - 0.6;
        arr.push(rv);
    }
    //console.log(arr);
    epsilon = arr;
    console.log(`Generated epsilon values => ${epsilon}`);
}
//to display X and Y vectors
function show_x_y() {
    let btn = document.getElementById('act1-btn-1');
    btn.remove();
    let d = document.getElementById('tb1-box');
    let text = `
        <br>
        <div class='table-responsive' style='margin: auto;'>
            <table class='table table-bordered ' style='background-color: white;' >
                <tr id='x-values'>
                <th class='table-dark'>X</th>
                </tr>

                <tr id='y-values'>
                <th class='table-dark'>Y</th>
                </tr>
            </table>

        </div>
        <button class='btn btn-info std-btn' onclick='a1_question();' style='position: relative; left: 25vw;' id='temp-btn-1'>Next</button>

        `;
    d.innerHTML += text;
    load_xy_values();
}
function load_xy_values() {
    let x_val = document.getElementById('x-values');
    let y_val = document.getElementById('y-values');
    for (let i = 0; i < Y.length; i++) {
        console.log(X[i]);
        x_val.innerHTML += `<td>${X[i].toFixed(2)}</td>`;
        y_val.innerHTML += `<td>${Y[i].toFixed(3)}</td>`;
    }
}
// <div class='row' id='s2'>
// <div class='col-6'>Enter Alpha Value</div>
// <div class='col-6'>
//     <select class='form-select fs-16px' disabled  id='act1-alpha-inp' onchange= 'set_alpha();'>
//     </select>
// </div>
// </div>
activity1();
//# sourceMappingURL=activity1.js.map