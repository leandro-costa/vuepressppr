package Controle;

import Dispositivo.Dispositivo;

public class ControleBasico implements ControleRemoto {
    protected Dispositivo dispositivo;

    public ControleBasico() {}

    public ControleBasico(Dispositivo dispositivo) {
        this.dispositivo = dispositivo;
    }

    @Override
    public void power() {
        System.out.println("Controle: Liga / Desliga");
        if (dispositivo.isligado()) {
            dispositivo.disable();
        } else {
            dispositivo.enable();
        }
    }

    @Override
    public void volumeDown() {
        System.out.println("Controle: diminuir o volume");
        dispositivo.setVolume(dispositivo.getVolume() - 10);
    }

    @Override
    public void volumeUp() {
        System.out.println("Controle: aumentar o volume");
        dispositivo.setVolume(dispositivo.getVolume() + 10);
    }

    @Override
    public void channelDown() {
        System.out.println("Controle: canal para baixo");
        dispositivo.setChannel(dispositivo.getChannel() - 1);
    }

    @Override
    public void channelUp() {
        System.out.println("Controle: canal para cima");
        dispositivo.setChannel(dispositivo.getChannel() + 1);
    }
}
