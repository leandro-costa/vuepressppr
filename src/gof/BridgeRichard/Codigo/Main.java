package gof.BridgeRichard.Codigo;

import gof.BridgeRichard.Codigo.Dispositivo;
import gof.BridgeRichard.Codigo.Tv;
import gof.BridgeRichard.Codigo.ControleRemoto;
import gof.BridgeRichard.Codigo.ControleBasico;
import gof.BridgeRichard.Codigo.ControleAvancado;

public class Main {
    public static void main(String[] args) {
        testeDispositivo(new Tv());
        testeDispositivo(new Radio());
    }

    private static void testeDispositivo(Dispositivo dispositivo) {
        System.out.println("\nTeste com o Controle Básico!");
        ControleBasico controleBasico = new ControleBasico(dispositivo);
        controleBasico.Ligar();
        dispositivo.printStatus();

        System.out.println("\nTeste com o Controle Completo!");
        ControleAvancado controleAvancado = new ControleAvancado(dispositivo);
        controleAvancado.Ligar();
        controleAvancado.mudo();
        dispositivo.printStatus();
    }
}
