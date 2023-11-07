// Nama : indah puspitasari
// NIM : 20220040095
// Kelas : TI22H

import java.rmi.*;

public interface Search extends Remote {
    public String query(String search) throws RemoteException;
}