using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Console_Codigo_Primeiro.Model
{
    public class Curso
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int CursoId { get; set; }
        public string Titulo { get; set; }
        public int Creditos { get; set; }
        public virtual ICollection<Matricula> Matriculas { get; set; }

    }
}
