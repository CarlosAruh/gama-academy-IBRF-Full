using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Console_Codigo_Primeiro.Model
{
    public class Matricula
    {
        public int MatriculaId { get; set; }
        public int CursoId { get; set; }
        public int AlunoId { get; set; }
        public Nota? Nota { get; set; }
        public virtual Curso Curso { get; set; }
        public virtual Aluno Aluno { get; set; }

    }
}
