function luas(){
    let alas= document.getElementById('alas_input').value;
    if(alas==""){
        alas='0';
    }
    let tinggi= document.getElementById('tinggi_input').value;
    if(tinggi==""){
        tinggi='0';
    }
    let hasil=1/2*alas*tinggi;
    console.log(alas);
    document.getElementById("keterangan_output").innerHTML="<p>L= 1/2 x A x T</p>";
    document.getElementById("proses_output").innerHTML=`L= 1/2 x ${alas} x ${tinggi}`;
    document.getElementById("hasil_output").innerHTML=`L= ${hasil}`;

}

function keliling(){
    let A= document.getElementById('sisiA_input').value;
    if(A ==""){
        A='0';
    }
    let B= document.getElementById('sisiB_input').value;
    if(B==""){
        B='0';
    }
    let C= document.getElementById('sisiC_input').value;
    if(C==""){
        C='0';
    }
    let hasil= parseInt(A) + parseInt(B) + parseInt(C)
    console.log(hasil);
    document.getElementById("keterangan_output_K").innerHTML="<p>K = S1 + S2 + S3</p>";
    document.getElementById("proses_output_K").innerHTML=`K= ${A} + ${B} + ${C}`;
    document.getElementById("hasil_output_K").innerHTML=`K = ${hasil}`;

}
