using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class DeletingRelation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductsDefaults_Providers_provider_id",
                table: "ProductsDefaults");

            migrationBuilder.DropIndex(
                name: "IX_ProductsDefaults_provider_id",
                table: "ProductsDefaults");

            migrationBuilder.DropColumn(
                name: "provider_id",
                table: "ProductsDefaults");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "provider_id",
                table: "ProductsDefaults",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_ProductsDefaults_provider_id",
                table: "ProductsDefaults",
                column: "provider_id");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductsDefaults_Providers_provider_id",
                table: "ProductsDefaults",
                column: "provider_id",
                principalTable: "Providers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
