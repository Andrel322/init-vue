export class Time {

    constructor(id, nome, escudo) {
        this.id = id;
        this.nome = nome;
        this.escudo = escudo;

        this.pontos = 0;
        this.gm = 0;
        this.gs = 0;
    }

    updateInfo(pontos, gm, gs) {
        this.pontos += pontos;
        this.gm += gm;
        this.gs += gs;
    }

    fimJogo(gols, timeAdv, golsAdv) {
        if (gols == golsAdv) {
            this.updateInfo(1, gols, golsAdv);
            timeAdv.updateInfo(1, golsAdv, gols);
        }
        else {
            if (gols > golsAdv) {
                this.updateInfo(3, gols, golsAdv);
                timeAdv.updateInfo(0, golsAdv, gols);
            }
            else {
                this.updateInfo(0, gols, golsAdv);
                timeAdv.updateInfo(3, golsAdv, gols);
            }
        }
    }
}