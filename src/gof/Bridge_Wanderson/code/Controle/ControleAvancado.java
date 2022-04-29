package Controle;

import Dispositivo.Dispositivo;

public class ControleAvancado extends ControleBasico{

    public ControleAvancado(Dispositivo dispositivo) {
        super.dispositivo = dispositivo;
    }

    public void mute() {
        System.out.println("Controle Remoto: mudo");
        dispositivo.setVolume(0);
    }
}
