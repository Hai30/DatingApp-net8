using CloudinaryDotNet.Actions;

namespace API.Interfaces;

public interface IPhotoService
{
     Task<ImageUploadResult> AddPhtoAsync(IFormFile file);
     Task<DeletionResult> DeletePhotoAsync(string puclicId);
}
