/**
 * Güvenlik ve Dosya Doğrulama Yardımcısı
 */

export interface FileValidationResult {
  valid: boolean;
  error?: string;
  category?: 'image' | 'video' | 'pdf' | 'document';
}

const ALLOWED_MIME_TYPES = new Set([
  // Görseller
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/svg+xml',
  // Videolar
  'video/mp4',
  'video/webm',
  'video/quicktime', // .mov
  'video/ogg',
  // Belgeler
  'application/pdf',
]);

const ALLOWED_EXTENSIONS = new Set([
  // Görseller
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.gif',
  '.svg',
  // Videolar
  '.mp4',
  '.webm',
  '.mov',
  '.ogv',
  // Belgeler
  '.pdf',
]);

// 100 MB maks boyut
export const MAX_FILE_SIZE_BYTES = 100 * 1024 * 1024;

export function validateUploadedFile(file: File): FileValidationResult {
  if (!file) {
    return { valid: false, error: 'Dosya seçilmedi' };
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return {
      valid: false,
      error: `Dosya boyutu çok yüksek. Maksimum izin verilen boyut: 100 MB (Yüklenen: ${(file.size / (1024 * 1024)).toFixed(1)} MB)`,
    };
  }

  const ext = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
  const mime = file.type?.toLowerCase();

  const isExtAllowed = ALLOWED_EXTENSIONS.has(ext);
  const isMimeAllowed = mime ? ALLOWED_MIME_TYPES.has(mime) : true;

  if (!isExtAllowed && !isMimeAllowed) {
    return {
      valid: false,
      error: `Desteklenmeyen dosya türü (${ext || mime}). İzin verilenler: .jpg, .png, .webp, .gif, .svg, .mp4, .webm, .mov, .pdf`,
    };
  }

  let category: FileValidationResult['category'] = 'document';
  if (mime?.startsWith('image/') || ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'].includes(ext)) {
    category = 'image';
  } else if (mime?.startsWith('video/') || ['.mp4', '.webm', '.mov', '.ogv'].includes(ext)) {
    category = 'video';
  } else if (mime === 'application/pdf' || ext === '.pdf') {
    category = 'pdf';
  }

  return { valid: true, category };
}
