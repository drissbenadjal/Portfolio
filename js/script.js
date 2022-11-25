document.body.style.overflow = "hidden";

window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("nav").classList.add("navbar-scrolled");
  } else {
    document.querySelector("nav").classList.remove("navbar-scrolled");
  }
};

//recuperer tout les a dans la class .mid
const mid = document.querySelectorAll(".mid a");

//pour chaque a on ajoute un event
mid.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    //recuperer uniquement le texte de l'a et le mettre en majuscule et le mettre dans #hover-text
    document.querySelector("#hover-text").innerHTML = e.target.innerText.toUpperCase();
    document.querySelector("nav").classList.add("navbar-hover");
    document.querySelector("nav").classList.remove("navbar-scrolled");
    document.querySelector(".nav-hover").classList.add("active-hover");
  });
  item.addEventListener("mouseout", (e) => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector("nav").classList.add("navbar-scrolled");
    } else {
      document.querySelector("nav").classList.remove("navbar-scrolled");
    }
    document.querySelector("nav").classList.remove("navbar-hover");
    document.querySelector(".nav-hover").classList.remove("active-hover");
  });
});

let elements = document.querySelectorAll('.rolling-text');

elements.forEach(element => {
  let innerText = element.innerText;
  element.innerHTML = '';

  let textContainer = document.createElement('div');
  textContainer.classList.add('block');

  for (let letter of innerText) {
    let span = document.createElement('span');
    span.innerText = letter.trim() === '' ? '\xa0' : letter;
    span.classList.add('letter');
    textContainer.appendChild(span);
  }

  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});

elements.forEach(element => {
  element.addEventListener('mouseover', () => {
    element.classList.remove('play');
  });
});



//BG COLOR

// var canvas = document.getElementById("bgcolor");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // Initialize the GL context
// var gl = canvas.getContext('webgl');
// if (!gl) {
//   console.error("Unable to initialize WebGL.");
// }

// //Time
// var time = 0.0;

// //************** Shader sources **************

// var vertexSource = `
// attribute vec2 position;
// void main() {
//   gl_Position = vec4(position, 0.0, 1.0);
// }
// `;

// var fragmentSource = `
// precision highp float;

// #define AA

// uniform float width;
// uniform float height;
// vec2 resolution = vec2(width, height);

// uniform float time;

// void main(){

// 	float strength = 0.4;
// 	float t = time/6.0;

// 	vec3 col = vec3(0);
// 	vec2 fC = gl_FragCoord.xy;

// 	#ifdef AA
// 	for(int i = -1; i <= 1; i++) {
// 		for(int j = -1; j <= 1; j++) {

// 			fC = gl_FragCoord.xy+vec2(i,j)/3.0;

// 			#endif

// 			//Normalized pixel coordinates (from 0 to 1)
// 			vec2 pos = fC/resolution.xy;

// 			pos.y /= resolution.x/resolution.y;
// 			pos = 4.0*(vec2(0.5) - pos);

// 			for(float k = 1.0; k < 7.0; k+=1.0){ 
// 				pos.x += strength * sin(2.0*t+k*1.5 * pos.y)+t*0.5;
// 				pos.y += strength * cos(2.0*t+k*1.5 * pos.x);
// 			}

// 			//Time varying pixel colour
// 			col += 0.5 + 0.5*cos(time+pos.xyx+vec3(0,2,4));

// 			#ifdef AA
// 		}
// 	}

// 	col /= 9.0;
// 	#endif

//   //Gamma
//   col = pow(col, vec3(0.4545));

// 	//Fragment colour
// 	gl_FragColor = vec4(col,1.0);
// }
// `;

// //************** Utility functions **************

// window.addEventListener('resize', onWindowResize, false);

// function onWindowResize() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   gl.viewport(0, 0, canvas.width, canvas.height);
//   gl.uniform1f(widthHandle, window.innerWidth);
//   gl.uniform1f(heightHandle, window.innerHeight);
// }


// //Compile shader and combine with source
// function compileShader(shaderSource, shaderType) {
//   var shader = gl.createShader(shaderType);
//   gl.shaderSource(shader, shaderSource);
//   gl.compileShader(shader);
//   if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
//     throw "Shader compile failed with: " + gl.getShaderInfoLog(shader);
//   }
//   return shader;
// }

// //From https://codepen.io/jlfwong/pen/GqmroZ
// //Utility to complain loudly if we fail to find the attribute/uniform
// function getAttribLocation(program, name) {
//   var attributeLocation = gl.getAttribLocation(program, name);
//   if (attributeLocation === -1) {
//     throw 'Cannot find attribute ' + name + '.';
//   }
//   return attributeLocation;
// }

// function getUniformLocation(program, name) {
//   var attributeLocation = gl.getUniformLocation(program, name);
//   if (attributeLocation === -1) {
//     throw 'Cannot find uniform ' + name + '.';
//   }
//   return attributeLocation;
// }

// //************** Create shaders **************

// //Create vertex and fragment shaders
// var vertexShader = compileShader(vertexSource, gl.VERTEX_SHADER);
// var fragmentShader = compileShader(fragmentSource, gl.FRAGMENT_SHADER);

// //Create shader programs
// var program = gl.createProgram();
// gl.attachShader(program, vertexShader);
// gl.attachShader(program, fragmentShader);
// gl.linkProgram(program);

// gl.useProgram(program);

// //Set up rectangle covering entire canvas 
// var vertexData = new Float32Array([
//   -1.0, 1.0, 	// top left
//   -1.0, -1.0, 	// bottom left
//   1.0, 1.0, 	// top right
//   1.0, -1.0, 	// bottom right
// ]);

// //Create vertex buffer
// var vertexDataBuffer = gl.createBuffer();
// gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer);
// gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);

// // Layout of our data in the vertex buffer
// var positionHandle = getAttribLocation(program, 'position');

// gl.enableVertexAttribArray(positionHandle);
// gl.vertexAttribPointer(positionHandle,
//   2, 				// position is a vec2 (2 values per component)
//   gl.FLOAT, // each component is a float
//   false, 		// don't normalize values
//   2 * 4, 		// two 4 byte float components per vertex (32 bit float is 4 bytes)
//   0 				// how many bytes inside the buffer to start from
// );

// //Set uniform handle
// var timeHandle = getUniformLocation(program, 'time');
// var widthHandle = getUniformLocation(program, 'width');
// var heightHandle = getUniformLocation(program, 'height');

// gl.uniform1f(widthHandle, window.innerWidth);
// gl.uniform1f(heightHandle, window.innerHeight);

// var lastFrame = Date.now();
// var thisFrame;

// function draw() {

//   //Update time
//   thisFrame = Date.now();
//   time += (thisFrame - lastFrame) / 770;
//   lastFrame = thisFrame;

//   //Send uniforms to program
//   gl.uniform1f(timeHandle, time);
//   //Draw a triangle strip connecting vertices 0-4
//   gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

//   requestAnimationFrame(draw);
// }

// draw();

// document.querySelector('#scroll').addEventListener('click', function () {
//   window.scrollTo({
//     top: window.innerHeight,
//     behavior: 'smooth'
//   });
// });