import Controle.ControleAvancado;
import Controle.ControleBasico;
import Dispositivo.Dispositivo;
import Dispositivo.Radio;
import Dispositivo.Tv;

public class Executa {
    public static void main(String[] args) {
        testeDispositivo(new Tv());
        testeDispositivo(new Radio());
    }

    public static void testeDispositivo(Dispositivo dispositivo) {
        System.out.println("Testes com controle remoto básico.");
        ControleBasico controleBasico = new ControleBasico(dispositivo);
        controleBasico.power();
        controleBasico.volumeUp();
        controleBasico.channelUp();
        dispositivo.printStatus();

        System.out.println("Testes com controle remoto avançado.");
        ControleAvancado controleAvancado = new ControleAvancado(dispositivo);
        controleAvancado.power();
        controleAvancado.mute();
        controleBasico.volumeUp();
        controleBasico.channelUp();
        dispositivo.printStatus();
    }
}
