using Microsoft.AspNetCore.Identity;
using System.Security.Cryptography;
using API.Entities;
using System.Text;
using System;
using Microsoft.EntityFrameworkCore;
using API.DTOs;
using AutoMapper;
using API.DbContexts;

namespace API.Services
{
    public class TaskOptimizer
    {

        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _hostingEnv;
        public TaskOptimizer(IConfiguration configuration, IWebHostEnvironment hostingEnv) { 
            _configuration = configuration;
            _hostingEnv = hostingEnv;   
        }


        public async Task<string> StoreImage(IFormFile file, string subCarpet="")
        {
            if (file == null || file.Length == 0) throw new ArgumentNullException("Archivo no valido");
            string[] ValidMIMETypes = new[] { "image/jpeg", "image/png", "image/jpg" };
            if (!ValidMIMETypes.Contains(file.ContentType, StringComparer.OrdinalIgnoreCase))
            {
                throw new ArgumentException("Debe ser una imagen");
            }
            string fileName = Guid.NewGuid() + Path.GetExtension(file.FileName);
            var imagesRoute = _configuration["MediaPaths:ImagesPath"];
            if (imagesRoute == null)
            {
                throw new Exception("Ruta de imagenes del servidor no encontrada");
            }

            string savePath = "";
            
            if(!string.IsNullOrEmpty(subCarpet))
            {
                savePath = Path.Combine(imagesRoute, subCarpet, fileName);
            }
            else
            {
                savePath = Path.Combine(imagesRoute, fileName);
            }
             
            


            using (var stream = new FileStream(savePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }
            return $"/{fileName}";
        }

        public string getFullPathImage(string fileName, string subCarpet="") {
            var pathImages = _configuration["MediaPaths:ImagesPath"];
            if (pathImages == null)
            {
                throw new ArgumentException("Ruta de imagen no especificada");
            }

            string projectPath = _hostingEnv.ContentRootPath;

            var pathImage = Path.Combine(projectPath, pathImages,subCarpet, fileName);

            if(!File.Exists(pathImage))
            {   
                throw new ArgumentException("Ruta inexistente");
            }
            return pathImage;

        }


        public async Task<string> updateImage(string fileName, IFormFile image) 
        {
            string pathImage =  getFullPathImage(fileName);
            File.Delete(pathImage);
            string newPath = await StoreImage(image);
            return newPath;
        }

        public async Task<bool> deleteImage(string imgPath, string subCarpet)
        {
            string fullPath = getFullPathImage(imgPath, subCarpet);
            if (File.Exists(fullPath))
            {
                File.Delete(fullPath);
                return true; 
            }
            else
            {
                return false;
            }
        }

    }
}
