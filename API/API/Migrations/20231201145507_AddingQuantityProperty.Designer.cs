﻿// <auto-generated />
using API.DbContexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace API.Migrations
{
    [DbContext(typeof(DbSqliteContext))]
    [Migration("20231201145507_AddingQuantityProperty")]
    partial class AddingQuantityProperty
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.0");

            modelBuilder.Entity("API.Entities.ProductsDefault", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<bool>("active")
                        .HasColumnType("INTEGER");

                    b.Property<string>("imgPath")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<decimal>("price")
                        .HasColumnType("TEXT");

                    b.Property<int>("provider_id")
                        .HasColumnType("INTEGER");

                    b.Property<int>("quantity_available")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("provider_id");

                    b.ToTable("ProductsDefaults");
                });

            modelBuilder.Entity("API.Entities.Providers", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("rnc")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Providers");
                });

            modelBuilder.Entity("API.Entities.ProductsDefault", b =>
                {
                    b.HasOne("API.Entities.Providers", "provider")
                        .WithMany()
                        .HasForeignKey("provider_id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("provider");
                });
#pragma warning restore 612, 618
        }
    }
}
