// src/components/Sketch.js
import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

let x = 100;
let y = 100;
let cdPiscadinha = 360;
let pálpebraTopY = 15;
let pálpebraBottomY = 125;
let piscando = false;
let direcao = 1; // 1 = fechar, -1 = abrir
let velocidade = 2;
let movSy = 40;
let dir = 1
let vel = 2;

function Sketch({movS}) {
  const sketchRef = useRef();  
  const movSRef = useRef(movS); // mantemos o valor mais recente
  
  useEffect(() => {
    movSRef.current = movS; // atualiza o valor da ref sempre que a prop mudar
  }, [movS]);

  useEffect(() => {
    const s = (p) => {
      p.setup = () => {        
        p.createCanvas(140, 140);       
      };
  

      p.draw = () => {
        p.background(255, 255, 255);        
        olho(p);
        
        cdPiscadinha --;
        if(cdPiscadinha == 0){
          piscando = true;          
        }

        if(piscando){
          piscadinha(p);
          animarPálpebras();          
          cdPiscadinha = 360;
        }

        sombrancelha();
        console.log(movS);  

        if (movSRef.current){
          sombrancelhaSobe();
        }else{
          sombrancelhaDesce();
        }
        
      };

      function piscadinha(p) {
        p.push();
        p.fill(255); 
        p.noStroke();
        p.rect(50, pálpebraTopY, 100, 50);        
        p.rect(50, pálpebraBottomY, 100, 50);      
        p.pop();
      }
      
      function animarPálpebras() {
        if (direcao === 1) {
          if (pálpebraTopY < 50) {
            pálpebraTopY += velocidade;
            pálpebraBottomY -= velocidade;
          } else {
            direcao = -1; 
          }
        }
        else if (direcao === -1) {
          if (pálpebraTopY > 25) {
            pálpebraTopY -= velocidade;
            pálpebraBottomY += velocidade;
          } else {
            piscando = false; 
            direcao = 1;      
          }
        }        
      }
      
      function olho(p) {
        const olhoPos = p.createVector(100, 100);
        const olhoRaio = 25;      
        const mouse = p.createVector(p.mouseX, p.mouseY);      
        let dir = p5.Vector.sub(mouse, olhoPos);      
        if (dir.mag() > olhoRaio) {
          dir.setMag(olhoRaio); 
        }      
        const olhoDentroPos = p5.Vector.add(olhoPos, dir);
        p.fill(250, 250, 250);
        p.circle(olhoPos.x, olhoPos.y, olhoRaio * 3);      
        p.fill(0, 0, 0);
        p.circle(olhoDentroPos.x, olhoDentroPos.y, 20);   
      }

      function sombrancelha(){
        p.rect(60, movSy, 120, 5); 
      }

      function sombrancelhaSobe(){
        if (movSy > 10){
          movSy -= vel;
        }       
      }
      function sombrancelhaDesce(){
        if (movSy < 40){
          movSy += vel;
        }       
      }     


    };
    const myp5 = new p5(s, sketchRef.current);
    return () => {
      myp5.remove();
    };
  }, []); 
  

  return <div ref={sketchRef}></div>;
}

export default Sketch;


