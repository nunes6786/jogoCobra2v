const placar = {
    largura:360,
    altura:30,
    corFundo:"lightgreen",
    corTexto:"darkblue",
    pontuacao:0,
    nomeJogo:"Snake Game IFRJ",
    desenhar(){
        ctx.fillStyle = this.corFundo;
        ctx.fillRect(0,0,this.largura,this.altura);
        ctx.fillStyle = this.corTexto;
        ctx.textAlign="left";
        ctx.font="14px Fantasy"
        ctx.fillText(this.pontuacao+ " ponto(s)",10,3*this.altura/4);
        ctx.textAlign="right";
        ctx.fillText(cobra.vida + " vida(s)",this.largura-10,3*this.altura/4);
    }
}
