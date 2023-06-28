using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Console_Codigo_Primeiro.Model
{
    public class Aluno
    {
        //ID, Nome, Sobrenome, Data
        public int ID { get; set; }
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public DateTime DataMatricula { get; set; }
        public virtual ICollection<Matricula> Matriculas { get; set; }
    }
}
