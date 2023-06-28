using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Console_Database_Primeiro
{
    public class Program
    {
        static void Main(string[] args)
        {
            using (var dta = new LojaEntities())
            {
                //criar um cliente
                CLIENTE novoCliente1 = new CLIENTE()
                {
                    NOME = "JOÃO DA SILVA",
                    EMAIL = "joao.silva@gmail.com"
                };

                //Gravar o cliente no banco de dados na Tabela CLIENTE
                dta.CLIENTEs.Add(novoCliente1);
                dta.SaveChanges();


                CLIENTE novoCliente2 = new CLIENTE()
                {
                    NOME = "PEDRO DOS SANTOS SILVA",
                    EMAIL = "pedro.santos@gmail.com"
                };

                //Gravar o cliente no banco de dados na Tabela CLIENTE
                dta.CLIENTEs.Add(novoCliente2);
                dta.SaveChanges();

                CLIENTE novoCliente3 = new CLIENTE()
                {
                    NOME = "EDSON PEREIRA LIMA",
                    EMAIL = "edson.lima@gmail.com"
                };

                //Gravar o cliente no banco de dados na Tabela CLIENTE
                dta.CLIENTEs.Add(novoCliente3);
                dta.SaveChanges();

                novoCliente1.PEDIDOes.Add(new PEDIDO
                {
                    ITEM = "Pilha tipo A",
                    PRECO = 30

                });

                novoCliente2.PEDIDOes.Add(new PEDIDO
                {
                    ITEM = "Sapato 42",
                    PRECO = 300

                });

                novoCliente3.PEDIDOes.Add(new PEDIDO
                {
                    ITEM = "Camisa Seda Azul tam. 4",
                    PRECO = 3000

                });

                dta.SaveChanges();


                //Ling - Linguage Integrated Query
                var lQuery = from l in dta.CLIENTEs.Include("PEDIDOes")
                             select l;

                foreach ( var cliente in lQuery )
                {
                    Console.WriteLine($"Cliente: { cliente.NOME}");
                    Console.WriteLine("Pedidos");
                    Console.WriteLine("====================");

                    foreach ( var p in cliente.PEDIDOes)
                    {
                        Console.WriteLine($"Item: {p.ITEM}, Preço: {p.PRECO}");
                    }
                }

                Console.WriteLine("Precione alguma tecla para sair");
                Console.ReadKey();
            }
        }
    }
}
