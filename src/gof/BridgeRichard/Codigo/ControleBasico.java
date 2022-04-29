package gof.BridgeRichard.Codigo;

public class ControleBasico implements ControleRemoto{
    protected Dispositivo dispositivo;

    public ControleBasico(){}

    public ControleBasico(Dispositivo dispositivo) {
        this.dispositivo = dispositivo;
    }

    @Override
    public void Ligar() {
        if(dispositivo.isLigado()){
            dispositivo.Desligado();
        }else{
            dispositivo.Ligado();
        }
    }

    @Override
    public void volumeParaCima() {
        dispositivo.setVolume(dispositivo.getVolume() + 1);
        System.out.println("O Volume está: " + dispositivo.getVolume());
    }

    @Override
    public void volumeParaBaixo() {
        dispositivo.setVolume(dispositivo.getVolume() - 1);
        System.out.println("O Volume é: " + dispositivo.getVolume());
    }

    @Override
    public void canalParaCima() {
        dispositivo.setCanal(dispositivo.getCanal() + 1);
        System.out.println("O Canal é: " + dispositivo.getCanal()); 
    }

    @Override
    public void canalParaBaixo() {
        dispositivo.setCanal(dispositivo.getCanal() - 1);
        System.out.println("O Canal é: " + dispositivo.getCanal());
    }
}
