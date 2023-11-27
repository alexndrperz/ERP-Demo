using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

    namespace Ejercicio24Noviembre
    {
        internal class Program
        {
            static void Main(string[] args)
            {
                Queue<int> pila = new Queue<int>();
            Console.WriteLine("Ingrese los id de las personas");
            bool seguir = true;
                do
                {
                    int x = int.Parse(Console.ReadLine());
                    if (x != -9999 && x < 0) Console.WriteLine("NO numeros negativos");
                    else if (x == -9999)
                    {
                    seguir = false;
                    continue;
                    }
                    else
                    {
                        pila.Enqueue(x);
                    }




                } while (seguir);

                Program ins = new Program();
            Console.WriteLine();
            ins.printAll(pila);
                Queue<int> newPila = ins.createNew(pila);
                Console.WriteLine($"Nueva pila tiene {newPila.Count} valores");

                Console.WriteLine();
                int delValue = ins.halkwal(pila);
                Console.WriteLine($" La persona que salio de la cola tiene id {delValue}");

                Console.WriteLine();
                Console.WriteLine("¿La lista esta vacia?");
                Console.WriteLine(ins.queueIsEmpty(pila));
            Console.ReadKey();


        }

            private void printAll(Queue<int> pila)
            {
                Console.WriteLine("Imprimiendo valores de pila ");
                Console.WriteLine();
                foreach (int value in pila)
                {
                    Console.WriteLine(value);
                }
            }

            private Queue<int> createNew(Queue<int> pila)
            {
                Console.WriteLine("Vaceando pila");
                return pila = new Queue<int>();
            }

            private int halkwal(Queue<int>pila )  {
                if (pila.Count != 0) return pila.Dequeue();
                else return 0;
            }

            private string  queueIsEmpty(Queue<int> pila)
            {
                if (pila.Count == 0) return "Si";
                else return "No";
            }
        }


    }

